'use strict';

// load dependancies
var log = require('logger').createLogger();
var swaggerExpress = require('swagger-express-mw');
var app = require('express')();
//var db = require('./config/db')();


// create logger & log init
log.info("[APP INIT]: Start logger ...");

// set config
var config = {
    appRoot: __dirname // required config
};
log.info("[APP INIT]: Setting config ...");

// create RESTful endpoints
swaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        log.error("Oops", err);
        throw err;
    }

    // install middleware
    log.info("[APP INIT]: Installing swagger middleware ...");
    swaggerExpress.register(app);

    // listen to port ..
    var port = process.env.PORT || 10010;
    log.info(`[APP INIT]: Now listening on port ${port} ...`);
    app.listen(port);

});
log.info("[APP INIT]: Creating rest endpoints ...");
