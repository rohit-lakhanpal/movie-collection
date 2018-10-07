'use strict';

// load dependancies
var svc = require('../../services/moviesService')();
var log = require('logger').createLogger();

module.exports = {
    getAll,
    getOne
    // ,
    // getOne,
    // update,
    // delMovie
};

//GET /movie operationId
function getAll(req, res, next) {
    var _movies = svc.getAll();
    log.info(`GET [/movie]: Returning ${_movies.length} movies`);
    res.json({
        movies: _movies
    });
}

//GET /movie/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = svc.getById(id);
    if (movie) {
        log.info(`GET [/movie/${id}]: Returning movie "${movie.title}"`);
        res.json(movie);
    } else {
        log.info(`GET [/movie/${id}]: Could not find the movie`);
        res.status(404).send();
    }
}