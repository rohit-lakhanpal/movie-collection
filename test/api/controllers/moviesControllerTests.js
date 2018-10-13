var should = require('should');
var request = require('supertest');
const express = require('express');
var server = require('../../../index');


describe('controllers', function () {
    describe('moviesController', function () {
        describe('#/movie', function () {
            it('should return an array', function (done) {
                // TODO: Add tests
                request(server)
                    .get('/movie')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should(res.body.movies.constructor === Array).equal(true);
                        done();
                    });
                should(true).equal(true);
            });
        });

        describe('#/movie/{id}', function () {
            it('should return an object', function (done) {
                // TODO: Add tests
                request(server)
                    .get('/movie/1')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        if (err) throw err;
                        should(res.body.constructor === Object).equal(true);
                        should(res.body.id === 1).equal(true);
                        done();
                    });
            });
        });
    });
});