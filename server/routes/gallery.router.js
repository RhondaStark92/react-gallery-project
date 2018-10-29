const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let galleryId = req.params.id;
    
    sqlText = `UPDATE gallery SET likes=likes+1 WHERE id=$1`;

    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

// DELETE Route
router.delete('/:id', (req, res) => {
    let galleryId = req.params.id;
    sqlText = `DELETE FROM gallery WHERE id=$1`;
    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END DELETE Route


// GET Route
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM gallery ORDER BY id`;
    pool.query(sqlText)
        .then((result) => {
            // console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}) // End GET Route

// Setup a POST route to add a new gallery item to the database
router.post('/', (req, res) => {
    const newGallery = req.body;
    const sqlText = `INSERT INTO gallery (path, description) VALUES ($1, $2)`;
    pool.query(sqlText, [newGallery.path, newGallery.description])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
 })
 

module.exports = router;