// build your `Task` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('tasks')
}

const getById = (task_id) => {
    return db('tasks')
        .where({ task_id })
        .first();
}

const createTask = task => {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return getById(ids[0])
        })
}

module.exports = {
    // helper funcs go here
    createTask,
    getAll,
    getById
}