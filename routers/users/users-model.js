const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    findBy,
    findById,
    deleteUser,
    editUser,
}

function findAll () {
    return db('users')
}

function findBy (filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter)
}

function findById (id) {
    return db('users')
        .where({id})
        .first()
}

function deleteUser(id) {
    return db('users')
        .where({id})
        .delete()
}

function editUser(user, id) {
    return db('users')
        .where('id', id)
        .update(user)
}