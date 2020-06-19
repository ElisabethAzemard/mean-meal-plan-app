/* IMPORTS */
// node
const express = require('express');
const authRouter = express.Router();

// node modules
const { checkFields } = require('../../services/request.checker');
const MandatoryFields = require('../../services/mandatory.service');
const { register, login, logout, getUserInfo } = require('./auth.controller');


/* ROUTES DEFINITION */
class AuthRouterClass {
    // inject Passport to secure routes
    constructor( { passport } ) { this.passport = passport; }

    // set route fonctions
    routes() {

        // POST 'api/auth/register': send data to register new user
        authRouter.post('/register', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }

            // Check fields in the body
            const { miss, extra, ok } = checkFields(MandatoryFields.register, req.body);

            if (!ok) {
                return res.status(400).json({
                    message: 'Wrong fields',
                    data: null,
                    err: { miss, extra }
                })
            } else {
                register(req)
                    .then(apiResponse => {
                        return res.status(201).json({
                            message: 'Identity created',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch(apiResponse => {
                        return res.status(400).json({
                            message: 'Identity not created',
                            data: null,
                            err: apiResponse
                        })
                    })
            }
        });

        // POST 'api/auth/login': send data to log user
        authRouter.post('/login', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) {
                return res.status(400).json({
                    message: 'No body provided',
                    data: null,
                    err: null
                })
            }

            // Check fields in the body
            const { miss, extra, ok } = checkFields(MandatoryFields.identity, req.body);

            if (!ok) {
                return res.status(400).json({
                    message: 'Bad fields provided',
                    data: null,
                    err: { miss, extra }
                })
            } else {
                login(req, res)
                    .then(apiResponse => {
                        return res.status(201).json({
                            message: 'Identity found',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch(apiResponse => {
                        return res.status(400).json({
                            message: 'Identity not found',
                            data: null,
                            err: apiResponse
                        })
                    })
            }
        });

        // GET 'api/auth/logout': send data to log user
        authRouter.get('/logout', (req, res) => {
            logout(res)
                .then(apiResponse => {
                    return res.status(201).json({
                        message: 'Identity found',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'Identity not found',
                        data: null,
                        err: apiResponse
                    })
                })
        });

        // GET 'api/auth': check user token (for Angular AuthGuard)
        authRouter.get('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            getUserInfo(req)
                .then(apiResponse => {
                    return res.status(200).json({
                        message: 'User data from token found',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch(apiResponse => {
                    return res.status(400).json({
                        message: 'User data from token not found',
                        data: null,
                        err: apiResponse
                    })
                })
        });
    };

    // start router
    init() {
        // init routes
        this.routes();

        // return router
        return authRouter;
    };
};


/* EXPORT */
module.exports = AuthRouterClass;
