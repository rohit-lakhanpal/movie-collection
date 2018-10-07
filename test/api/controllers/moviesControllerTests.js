var should = require('should');
var request = require('supertest');

describe('controllers', function () {
    describe('moviesController', function () {
        describe('#/movies', function () {
            it('should return an array', function () {
                // cause failure to validate
                assert.equal([1, 2, 3].indexOf(4), -1);
            });
        });
    });
});