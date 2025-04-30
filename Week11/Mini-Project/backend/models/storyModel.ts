import { db } from "../db/db";

export const getAllStories = async () => {
  const stories = await db("stories").select("*");

  const results = await Promise.all(
    stories.map(async (story) => {
      const contributors = await db("contributors")
        .where({ story_id: story.id })
        .join("users", "contributors.user_id", "=", "users.id")
        .select(
          "contributors.id",
          "contributors.user_id",
          "contributors.story_id",
          "users.username"
        );

      return {
        ...story,
        contributors: contributors.map((c) => ({
          id: c.id,
          user_id: c.user_id,
          story_id: c.story_id,
          user: {
            id: c.user_id,
            username: c.username,
          },
        })),
      };
    })
  );

  return results;
};

export const getStoryById = async (id: number) => {
  const story = await db("stories").where({ id }).first();

  if (!story) return null;

  const contributors = await db("contributors")
    .where({ story_id: id })
    .join("users", "contributors.user_id", "=", "users.id")
    .select(
      "contributors.id",
      "contributors.user_id",
      "contributors.story_id",
      "users.username"
    );

  return {
    ...story,
    contributors: contributors.map((c) => ({
      id: c.id,
      user_id: c.user_id,
      story_id: c.story_id,
      user: {
        id: c.user_id,
        username: c.username,
      },
    })),
  };
};

export const getStoriesByUser = (user_id: number) => {
  return db("stories").where({ author_id: user_id });
};

// Create story using transaction
export const createStory = async (
  title: string,
  content: string,
  author_id: number
) => {
  const trx = await db.transaction();
  try {
    const [story] = await trx("stories")
      .insert({ title, content, author_id })
      .returning("*");
    await trx.commit();
    return story;
  } catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
};

export const updateStory = async (
  id: number,
  title: string,
  content: string
) => {
  const trx = await db.transaction();
  try {
    const [story] = await trx("stories")
      .where({ id })
      .update({ title, content, updated_at: db.fn.now() })
      .returning("*");
    await trx.commit();
    return story;
  } catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
};

// Delete story using transaction
export const deleteStory = async (id: number) => {
  const trx = await db.transaction();
  try {
    await trx("contributors").where({ story_id: id }).del();
    await trx("stories").where({ id }).del();
    await trx.commit();
  } catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
};

export const isContributor = (story_id: number, user_id: number) => {
  return db("contributors").where({ story_id, user_id }).first();
};
