'use strict';

module.exports = function () {
    // returns all movies
    var _getAll = function () {
        return [{
            "title": "The Land Girls",
            "usGross": 146083,
            "worldwideGross": 146083,
            "usDvdSales": null,
            "productionBudget": 8000000,
            "releaseDate": "12-Jun-98",
            "mpaaRating": "R",
            "runningTimeInMin": null,
            "distributor": "Gramercy",
            "source": null,
            "majorGenre": null,
            "creativeType": null,
            "director": null,
            "rottenTomatoesRating": null,
            "imdbRating": 6.1,
            "imdbVotes": 1071,
            "id": 1
        }, {
            "title": "First Love, Last Rites",
            "usGross": 10876,
            "worldwideGross": 10876,
            "usDvdSales": null,
            "productionBudget": 300000,
            "releaseDate": "7-Aug-98",
            "mpaaRating": "R",
            "runningTimeInMin": null,
            "distributor": "Strand",
            "source": null,
            "majorGenre": "Drama",
            "creativeType": null,
            "director": null,
            "rottenTomatoesRating": null,
            "imdbRating": 6.9,
            "imdbVotes": 207,
            "id": 2
        }, {
            "title": "I Married a Strange Person",
            "usGross": 203134,
            "worldwideGross": 203134,
            "usDvdSales": null,
            "productionBudget": 250000,
            "releaseDate": "28-Aug-98",
            "mpaaRating": null,
            "runningTimeInMin": null,
            "distributor": "Lionsgate",
            "source": null,
            "majorGenre": "Comedy",
            "creativeType": null,
            "director": null,
            "rottenTomatoesRating": null,
            "imdbRating": 6.8,
            "imdbVotes": 865,
            "id": 3
        }];
    }

    // returns movie by id
    var _getById = function (id) {
        return {
            "title": "I Married a Strange Person",
            "usGross": 203134,
            "worldwideGross": 203134,
            "usDvdSales": null,
            "productionBudget": 250000,
            "releaseDate": "28-Aug-98",
            "mpaaRating": null,
            "runningTimeInMin": null,
            "distributor": "Lionsgate",
            "source": null,
            "majorGenre": "Comedy",
            "creativeType": null,
            "director": null,
            "rottenTomatoesRating": null,
            "imdbRating": 6.8,
            "imdbVotes": 865,
            "id": 3
        };
    }

    return {
        getAll: _getAll,
        getById: _getById
    };
};