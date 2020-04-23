/*
Import
*/
    // NodeJS
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
    const bodyParser = require('body-parser'); //=> https://www.npmjs.com/package/body-parser
    const cookieParser = require('cookie-parser'); //=> https://www.npmjs.com/package/cookie-parser
    const path = require('path'); //=> https://www.npmjs.com/package/path
    const ejs = require('ejs'); //=> https://www.npmjs.com/package/ejs

    // services
    const mongoDB = require('./services/db.service');

    // main router
    const { mainRouter } = require('./routers/main.router');

/* CONFIG */
// Declarations
const server = express();
const port = process.env.PORT;

// Server class
class ServerClass{
    init() {
        // view engine configuration
        server.engine('html', ejs.renderFile);
        server.set('view engine', 'html');

        // static path configuration
        server.set('views', __dirname + '/www');
        server.use( express.static(path.join(__dirname, 'www')) );

        // use BodyParser to get user body data
        server.use(bodyParser.json({limit: '10mb'}));
        server.use(bodyParser.urlencoded({ extended: true }));

        // use CookieParser to setup server-side cookies
        server.use(cookieParser(process.env.COOKIE_SECRET));

        // set server main router
        server.use('/', mainRouter);

        // start server
        this.launch();
    };

    launch(){
        // Connect to MongoDB
        mongoDB.initClient()
            .then(db => {
                // Launch server
                server.listen(port, () => console.log({ db, server: `Server is running on http://localhost:${port}` }));
            })
            .catch(mongooseError => console.log(mongooseError));
    };
}

/* START SERVER */
new ServerClass().init();
