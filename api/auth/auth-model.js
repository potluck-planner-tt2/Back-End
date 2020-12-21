const db = require("../../data/dbConfig");

const addUser = async (user) => {
  const [id] = await db("users").insert(user);
  return db("users").where('user_id', id).first();
};

module.exports = {
  addUser,
};
