import { db } from "../db/db";
import bcrypt from "bcrypt";

module.exports = {
  createUser: async (username: string, email: string, password: string) => {
    const trx = await db.transaction();
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [user] = await trx("users").insert(
        {
          username,
          email: email.toLowerCase(),
          password_hash: hashedPassword,
        },
        ["username", "email", "id"]
      );
      await trx.commit();
      return user;
    } catch (err) {
      await trx.rollback();
      console.log(err);
      throw err;
    }
  },
  getUserByEmail: async (email: string) => {
    try {
      const user = await db("users")
        .select("id", "username", "email", "password_hash")
        .where({ email : email.toLowerCase() })
        .first();
      return user;
    } catch (err) {
      throw err;
    }
  },
  getAllUsers: async () => {
    try {
      const users = await db("users").select("id", "username", "email");
      return users;
    } catch (err) {
      throw err;
    }
  },
};
