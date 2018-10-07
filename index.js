'use strict';

// load dependancies
var logger = require('logger');
var swaggerExpress = require('swagger-express-mw');
var app = require('express')();
//var db = require('./config/db')();


// create logger & log init
var log = logger.createLogger();
log.info("... app init - start log");

// set config
var config = {
    appRoot: __dirname // required config
};
log.info("... app init - set config");

// create RESTful endpoints
swaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        log.error("Oops", err);
        throw err;
    }

    // install middleware
    log.info(".... installing swagger middleware");
    swaggerExpress.register(app);

    // listen to port ..
    var port = process.env.PORT || 10010;
    log.info(`.... listening on port ${port}`);
    app.listen(port);

});
log.info("... app init - create rest endpoints");
