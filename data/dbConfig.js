// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";

const knex = require('knex');

const config = require('../knexfile');

// configure this to utilize the environment rather than hard coded
module.exports = knex(config.development);