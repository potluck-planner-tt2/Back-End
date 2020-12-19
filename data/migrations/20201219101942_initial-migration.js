
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('user_id'); 
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
    })
    .createTable('potlucks', table => {
      table.increments('pl_id'); 
      table.string('name').notNullable().unique(); 
      table.integer('organizer_id')
        .unsigned()
        .notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
    })
    .createTable('potluck_attendance', table => {
      table.increments('id');
      table.boolean('confirmed');
      table.integer('pl_id')
        .unsigned()
        .notNullable()
        .references('pl_id').inTable('potlucks')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
    })
    .createTable('food_items', table => {
      table.increments('food_id');
      table.string('name').notNullable().unique(); 
    })
    .createTable('event_foods', table => {
      table.increments('id'); 
      table.integer('pl_id')
        .unsigned()
        .notNullable()
        .references('pl_id').inTable('potlucks')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.integer('food_id')
        .unsigned()
        .notNullable()
        .references('food_id').inTable('food_items')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
      table.integer('owner_id')
        .unsigned()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('event_foods')
    .dropTableIfExists('food_items')
    .dropTableIfExists('potluck_attendance')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('users'); 
};
