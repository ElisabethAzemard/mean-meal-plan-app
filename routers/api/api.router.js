/* IMPORTS */
// Node
const express = require('express');
const router = express.Router();

// services
const { checkFields } = require('../../services/request.checker');
const MandatoryFields = require('../../services/mandatory.service');
const { createItem, readItem, readOneItem, findOneItem, updateItem, updateItemByName, deleteItem } = require('./api.controller');


// Replace 'MandatoryFields.item' (model, not method), with appropriate model name when using this file as template.

/* ROUTES DEFINITION */
class ApiRouterClass {

    // inject Passport to secure routes
    constructor( { passport } ) { this.passport = passport }

    // set route function
    routes() {
        // CRUD: create
        router.post('/:endpoint', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // ERROR: no body provided
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }

            // check fields in the body
            const { miss, extra, ok } = checkFields(MandatoryFields[req.params.endpoint], req.body);

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

        // CRUD: get collection
        router.get('/:endpoint', (req, res) => {
            readItem(req)
                .then(apiResponse => {
                    return res.status(200).json({
                        message: 'Data received',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Data not received',
                        data: null,
                        err: apiResponse
                    })
                })
        })

        // CRUD: get one by name
        router.get('/:endpoint/name/:name', (req, res) => {
            findOneItem(req)
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

        // CRUD: get one by id
        router.get('/:endpoint/id/:id', (req, res) => {
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

        // CRUD: update by name
        router.patch('/:endpoint/name/:name', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // ERROR: no body provided
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            };

            updateItemByName(req)
                .then(apiResponse => {
                    return res.status(201).json({
                        message: 'Item updated',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Item not updated',
                        data: null,
                        err: apiResponse
                    })
                })
        })

        // CRUD: update by id
        router.patch('/:endpoint/:id', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // ERROR: no body provided
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }
            updateItem(req)

                .then(apiResponse => {
                    console.log(apiResponse)
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
        })

        // CRUD: delete by id
        router.delete('/:endpoint/:id', this.passport.authenticate('jwt', { session: false }), (req, res) => {
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
module.exports = ApiRouterClass;
