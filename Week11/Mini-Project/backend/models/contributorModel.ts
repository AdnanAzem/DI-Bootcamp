import { db } from "../db/db";

// Add contributor using transaction
export const addContributor = async (storyId: number, userId: number) => {
  const trx = await db.transaction();
  try {
    const [contributor] = await trx("contributors")
      .insert({ story_id: storyId, user_id: userId })
      .returning("*");
    await trx.commit();
    return contributor;
  } catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
  // return await db.transaction(async (trx) => {
  //   const [contributor] = await trx("contributors")
  //     .insert({ story_id: storyId, user_id: userId })
  //     .returning("*");
  //   return contributor;
  // });
};

// Get contributors (read-only)
export const getContributorsByStory = async (storyId: number) => {
  return await db("contributors")
    .join("users", "contributors.user_id", "users.id")
    .select("users.id", "users.username", "users.email")
    .where("story_id", storyId);
};

// Remove contributor using transaction
export const removeContributor = async (id: number) => {
  const trx = await db.transaction();
  try {
    await trx("contributors").where({ id }).del();
    await trx.commit();
  } catch (err) {
    await trx.rollback();
    console.log(err);
    throw err;
  }
  // return await db.transaction(async (trx) => {
  //   await trx("contributors").where({ id }).del();
  // });
};
