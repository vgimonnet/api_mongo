/*
Import
*/
    // Node
    const express = require('express');

    // Inner
    const { createOne, readAll, readOne, updateOne, deleteOne } = require('../controllers/crud.controller');
//

/*
Routes definition
*/
    class RouterClass {
        constructor() {
            this.router = express.Router();
        }

        routes() {
            // CRUD : route to Create data
            this.router.post('/:endpoint', (req, res) => createOne(req, res));

            // CRUD : route to Read all data
            this.router.get('/:endpoint', (req, res) => readAll(req, res));

            // CRUD : route to Read one data
            this.router.get('/:endpoint/:id', (req, res) => readOne(req, res));

            // CRUD : route to Update one data
            this.router.put('/:endpoint/:id', (req, res) => updateOne(req, res));

            // CRUD : route to Delete one data
            this.router.delete('/:endpoint/:id', (req, res) => deleteOne(req, res));
        }

        init() {
            // Get route functions
            this.routes();

            // Sendback router
            return this.router;
        }
    }
//

/*
Export
*/
    module.exports = RouterClass;
//