// build your `/api/tasks` router here
const express = require('express');

// const db = require('../../data/dbConfig');
const Task = require('./model');
const router = express.Router();

// build my endpoints here
router.get('/', (req, res) => {
    Task.getAll()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.post('/', (req, res) => {
    const newTask = req.body;

    Task.createTask(newTask)
        .then(createdTask => {
            res.status(201).json(createdTask)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;