const db = require("../config/db");

const createUser = async (userData, password) => {
  return db.transaction(async (trx) => {
    const [user] = await trx("users").insert(userData).returning("*");
    await trx("hashpwd").insert({ username: userData.username, password });
    return user;
  });
};

const getAllUsers = () => db("users").select("*");

const getUserById = (id) => db("users").where({ id }).first();

const getUserByUsername = (username) => db("hashpwd").where({ username }).first();

const updateUser = (id, userData) => db("users").where({ id }).update(userData).returning("*");

module.exports = { createUser, getAllUsers, getUserById, getUserByUsername, updateUser };
