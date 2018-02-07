'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');
const dv = require('../db');

if(process.env.NODE_ENV == 'production'){
    //Initizalize session with setting for production
    module.exports = session({
        secret: config.sessionSecret,
        resave: false,
        saveUnitialized: false,
        store: new MongoStore({
            mongooseConnection: db.mongooseConnection.connection
        })
    });

} else {
    //Initizalize session with setting for dev
    module.exports = session({
        secret: config.sessionSecret,
        saveUnitialized: true,
        resave: false,
    });
}