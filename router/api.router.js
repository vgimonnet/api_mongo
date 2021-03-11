/* 
Imports
*/
    // Node
    const express = require('express');
const Controllers = require('../controller/index');

    // Inner
    const Crontrollers = require('../controller/index');
//

/* 
Defintiion
*/
    class RouterClass{
        constructor(){
            this.router = express.Router();
        }

        routes(){
            // TODO: create service to send data
            
            // Define API route
            this.router.get('/', (req, res) => {
                // Rerturn JSON data
                return res.json( { msg: "Hello API" } )
            })

            // Define API route to create on data
            this.router.post('/:endpoint', (req, res) => {
                // TODO: check body data
                Controllers[req.params.endpoint].createOne(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to get all data
            this.router.get('/:endpoint', (req, res) => {
                // User the controller to get data
                Controllers[req.params.endpoint].readAll()
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to get one data
            this.router.get('/:endpoint/:id', (req, res) => {
                // User the controller to get data
                Controllers[req.params.endpoint].readOne(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to update one data
            this.router.put('/:endpoint/:id', (req, res) => {
                // TODO: check body data
                // TODO: check id user can update
                // User the controller to get data
                Controllers[req.params.endpoint].updateOne(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })

            // Define API route to delete one data
            this.router.delete('/:endpoint/:id', (req, res) => {
                // User the controller to get data
                // TODO: check id user can update
                Controllers[req.params.endpoint].deleteOne(req)
                .then( apiResponse => res.json( { data: apiResponse, err: null } ))
                .catch( apiError => res.json( { data: null, err: apiError } ))
            })
        }

        init(){
            // Get route fonctions
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