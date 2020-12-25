const db = require('../../data/dbConfig')

module.exports = {
    findPotluck,
    findPotluckById,
    addPotluck,
    editPotluck,
    deletePotluck
}

function findPotluck() {
    return db('potlucks')
}

function findPotluckById(id) {
    return db('potlucks')
        .where({id})
        .first()
}

function addPotluck(potluck) {
    return db('potlucks')
        .insert(potluck)
}

function editPotluck(potluck, id) {
    return db('potlucks')
        .where('id', id)
        .update(potluck)
}

function deletePotluck(id) {
    return db('potlucks')
        .where('id', id)
        .del()
}