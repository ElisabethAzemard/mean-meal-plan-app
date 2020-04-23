/* IMPORTS */

// node modules
const { Router } = require('express');
const passport = require('passport');

// routers
const FrontRouterClass = require('./front/front.router');
const AuthRouterClass = require('./auth/auth.router')
const ItemRouterClass = require('./item/item.router');
const RecipeRouterClass = require('./recipe/recipe.router');

// authentication
const { setAuthentication } = require('../services/auth.service');
setAuthentication(passport);

/* DEFINE ROUTERS */

// parent
const mainRouter = Router();
const apiRouter = Router();

// set api router
mainRouter.use('/api', apiRouter);

// child
const frontRouter = new FrontRouterClass();
const authRouter = new AuthRouterClass({ passport });
const itemRouter = new ItemRouterClass({ passport });
const recipeRouter = new RecipeRouterClass({ passport });

/* CONFIGURE ROUTES */

// set api child routers
apiRouter.use('/auth', authRouter.init());
apiRouter.use('/item', itemRouter.init());
apiRouter.use('/recipe', recipeRouter.init());

// set front router
mainRouter.use('/', frontRouter.init());


/* EXPORT */
module.exports = { mainRouter };
