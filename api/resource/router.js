// build your `/api/resources` router here
const express = require('express');

// const db = require('../../data/dbConfig');
const Resource = require('./model');
const router = express.Router();

// build my endpoints here

router.get("/", (req, res) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

router.post("/", (req, res) => {
    const payload = req.body;
    Resource.createResource(payload)
        .then(newRes => {
            res.status(201).json(newRes)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
})

module.exports = router;