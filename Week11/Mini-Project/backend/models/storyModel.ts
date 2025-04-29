import { db } from "../db/db";

export const getAllStories = () => {
  return db("stories").select("*");
};

export const getStoryById = (id: number) => {
  return db("stories").where({ id }).first();
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
  try{
    await trx("contributors").where({ story_id: id }).del();
    await trx("stories").where({ id }).del();
    await trx.commit();
  }
  catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
};

export const isContributor = (story_id: number, user_id: number) => {
  return db("contributors").where({ story_id, user_id }).first();
};
