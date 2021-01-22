// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = () => {
    return db('resources');
}

const getById = resource_id => {
    return db('resources')
        .where({ resource_id })
        .first();
}

const createResource = (body) => {
    return db('resources')
        .insert(body)
        .then(ids => {
            return getById(ids[0])
        });
}

module.exports = {
    // helper funcs go here
    createResource,
    getById,
    getAll
}