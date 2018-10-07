'use strict';

// load dependancies
var svc = require('../../services/moviesService')();
var log = require('logger').createLogger();

module.exports = {
    getAll,
    getOne,
    save,   
    // update,
    deleteOne
};

//GET /movie operation
function getAll(req, res, next) {
    var _movies = svc.getAll();
    log.info(`GET [/movie]: Returning ${_movies.length} movies`);
    res.json({
        movies: _movies
    });
}

//POST /movie operatiom
function save(req, res, next) {
    var movie = svc.save(req.body);
    log.info(`POST [/movie]: Saved movie with id ${movie.id}`);
    res.json(movie);
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

//DELETE /movie/{id} operationId
function deleteOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = svc.deleteById(id);
    if (movie) {
        log.info(`DELETE [/movie/${id}]: Deleted successfully`);
        res.status(201).send();
    } else {
        log.info(`GET [/movie/${id}]: Could not find the movie`);
        res.status(404).send();
    }
}