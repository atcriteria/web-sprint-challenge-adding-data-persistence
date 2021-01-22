// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('projects')
}

const getById = project_id => {
    return db('projects')
        .where({ project_id })
        .first()
}

const insert = (body) => {
    return db('projects')
        .insert(body)
        .then(ids => {
            return getById(ids[0])
        });
}

module.exports = {
    // helper funcs go here
    insert,
    getById,
    getAll
}