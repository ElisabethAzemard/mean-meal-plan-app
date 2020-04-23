/* IMPORTS */
const express = require('express');
const frontRouter = express.Router();

/* ROUTES DEFINITION */
class FrontRouterClass {

    routes(){
        frontRouter.get( '/*', (req, res) => {
            res.render('index', {title: 'Remy - Liste de courses'})
        });
    }

    init(){
        // init routes
        this.routes();

        // return router
        return frontRouter;
    }
}

/* EXPORT */
module.exports = FrontRouterClass;
