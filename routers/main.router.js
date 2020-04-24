/* IMPORTS */

// node modules
const { Router } = require('express');
const passport = require('passport');

// routers
const FrontRouterClass = require('./front/front.router');
const AuthRouterClass = require('./auth/auth.router')
const ApiRouterClass = require('./api/api.router');

// authentication
const { setAuthentication } = require('../services/auth.service');
setAuthentication(passport);

/* DEFINE ROUTERS */

// parent
const mainRouter = Router();
const apiParentRouter = Router();

// set api router
mainRouter.use('/api', apiParentRouter);

// child
const frontRouter = new FrontRouterClass();
const authRouter = new AuthRouterClass({ passport });
const apiRouter = new ApiRouterClass({ passport });

/* CONFIGURE ROUTES */

// set api child routers
apiParentRouter.use('/auth', authRouter.init());
apiParentRouter.use('/', apiRouter.init());

// set front router
mainRouter.use('/', frontRouter.init());


/* EXPORT */
module.exports = { mainRouter };
