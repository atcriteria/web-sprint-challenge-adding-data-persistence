// build your `/api/projects` router here
const express = require('express');

// const db = require('../../data/dbConfig');
const Project = require('./model');
const router = express.Router();

// build my endpoints here

router.get('/', (req, res) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

router.post('/', (req, res) => {
    const newProject = req.body;
    Project.insert(newProject)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

module.exports = router;