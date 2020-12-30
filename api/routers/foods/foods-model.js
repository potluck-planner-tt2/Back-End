const db = require('../../../data/dbConfig');

module.exports = {
  findFood,
  findFoodById,
  findFoodByName,
  addFood,
  editFood,
  deleteFood,
};

function findFood() {
  return db('food_items');
}

function findFoodById(id) {
  return db('food_items').where({ id }).first();
}

function findFoodByName(name) {
  return db('food_items').where({ name }).first();
}

function addFood(food) {
  return db('food_items').insert(food);
}

function editFood(food, id) {
  return db('food_items').where('id', id).update(food);
}

function deleteFood(id) {
  return db('food_items').where('id', id).del();
}
