exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food_items')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('food_items').insert([
        { name: 'Cole Slaw' },
        { name: 'Fruit Salad' },
        { name: 'Fried Chicken' },
        { name: 'Swedish Meatballs' },
        { name: 'Biscuits' },
      ]);
    });
};
