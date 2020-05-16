const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

function find() {
  return db("users").select("id", "username");
}

function findBy(info) {
  return db("users").select("id", "username", "password").where(info);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

async function add(user) {
  // hash the password with a time complexity
  user.password = await bcrypt.hash(user.password, 11);
  const [id] = await db("users").insert(user);
  return findById(id);
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};
