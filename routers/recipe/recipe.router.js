/* IMPORTS */
// Node
const express = require('express');
const router = express.Router();

// services
const { checkFields } = require('../../services/request.checker');
const MandatoryFields = require('../../services/mandatory.service').default;
const { createItem, readItem, readOneItem, updateItem, deleteItem } = require('./recipe.controller');


/* ROUTES DEFINITION */
class RecipeRouterClass {

    // inject Passport to secure routes
    constructor( { passport } ) { this.passport = passport }

    // set route function
    routes() {
        // CRUD: create
        router.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // ERROR: no body provided
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }

            // check fields in the body
            const { miss, extra, ok } = checkFields(MandatoryFields.recipe, req.body);

            if (!ok) {
                return res.status(400).json({
                    message: 'Incorrect fields provided',
                    data: null,
                    err: { miss, extra }
                })
            } else {
                createItem(req)
                    .then(apiResponse => {
                        return res.status(201).json({
                            message: 'Data created',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch(apiResponse => {
                        return res.status(400).json({
                            message: 'Data not created',
                            data: null,
                            err: apiResponse
                        })
                    })
            }
        })

        // CRUD: read
        router.get('/', (req, res) => {
            readItem(req)
                .then(apiResponse => {
                    return res.status(200).json({
                        message: 'Data sent',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sent',
                        data: null,
                        err: apiResponse
                    })
                })
        })

        // CRUD: read one
        router.get('/:id', (req, res) => {
            readOneItem(req)
                .then(apiResponse => {
                    return res.status(200).json({
                        message: 'Data sent',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Data not sent',
                        data: null,
                        err: apiResponse
                    })
                })
        })

        // CRUD: update
        router.put('/:id', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // ERROR: no body provided
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }

            // check fields in the body
            const { miss, extra, ok } = checkFields(MandatoryFields.recipe, req.body);

            if (!ok) {
                return res.status(400).json({
                    message: 'Incorrect fields provided',
                    data: null,
                    err: { miss, extra }
                })
            } else {
                updateItem(req)
                    .then(apiResponse => {
                        return res.status(201).json({
                            message: 'Data updated',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch(apiResponse => {
                        return res.status(400).json({
                            message: 'Data not updated',
                            data: null,
                            err: apiResponse
                        })
                    })
            }
        })

        // CRUD: delete
        router.delete('/:id', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            deleteItem(req)
                .then(apiResponse => {
                    return res.status(200).json({
                        message: 'Data deleted',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Data not deleted',
                        data: null,
                        err: apiResponse
                    })
                })
        })
    }

    // start router
    init() {
        // init routes
        this.routes();

        // return router
        return router;
    };
};


/* EXPORT */
module.exports = RecipeRouterClass;
