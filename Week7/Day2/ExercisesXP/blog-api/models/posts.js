const db = require("../config/db");

const getPosts = () => db("posts").select("*");

const getPost = (id) => db("posts").where({ id }).first();

const createPost = (title, content) =>
  db("posts").insert({ title, content }).returning("*").then(rows => rows[0]);

const updatePost = (id, title, content) =>
  db("posts").where({ id }).update({ title, content }).returning("*").then(rows => rows[0]);

const deletePost = (id) =>
  db("posts").where({ id }).del().returning("*").then(rows => rows[0]);

module.exports = { 
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost 
};
