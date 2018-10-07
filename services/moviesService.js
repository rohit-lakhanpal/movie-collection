'use strict';

//var path = require('path');
var data = require('../db/movies');

module.exports = function () {
    var movieList = data.movieList || []

    // returns all movies
    var _getAll = function () {
        return movieList;
    }

    // returns movie by id
    var _getById = function (id) {
        var movie = null;
        movieList.forEach(element => {
            if (element.id == id)
                movie = element;
        });
        return movie;
    };

    // save a movie
    var _save = function (movie) {
        movie.id = movieList.length + 1;
        movieList.push(movie);
        return movie;
    };

    // delete movie by id
    var _deleteById = function (id) {
        var movieIndex = -1;
        movieList.forEach((element, index) => {
            if (element.id == id) {
                movieIndex = index;
                return;
            }
        });
        if (movieIndex > -1) {
            movieList.splice(movieIndex, 1);
            return true;
        }
        return false;
    };

    // update movie
    var _update = function (id, movie) {
        var movieIndex = -1;
        movieList.forEach((element, index) => {
            if (element.id == id) {
                movieIndex = index;
                return;
            }
        });
        if (movieIndex > -1) {
            movie.id = id;
            movieList[movieIndex] = movie;
            return movieList[movieIndex];
        }
        return null;

    };

    return {
        getAll: _getAll,
        getById: _getById,
        save: _save,
        deleteById: _deleteById,
        update: _update
    };
};