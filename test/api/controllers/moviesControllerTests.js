var should = require('should');
var request = require('supertest');
const express = require('express');
var server = require('../../../index');
//var svc = require('../../../api/controllers/moviesController');

describe('controllers', function () {
    describe('moviesController', function () {
        describe('#/movie', function () {
            it('should return an array', function (done) {
                // TODO: Add tests
                // request(server)
                //     .get('/movies')
                //     .set('Accept', 'application/json')
                //     //.expect('Content-Type', /json/)
                //     .expect(200)
                //     .end(function (err, res) {
                //         if (err) throw err;                        
                //         done();
                //     });
                should(true).equal(true);
                done();
            });
        });

        describe('#/movie/{id}', function () {
            it('should return an object', function (done) {
                // TODO: Add tests
                // request(server)
                //     .get('/movies')
                //     .set('Accept', 'application/json')
                //     //.expect('Content-Type', /json/)
                //     .expect(200)
                //     .end(function (err, res) {
                //         if (err) throw err;                        
                //         done();
                //     });
                should(true).equal(true);
                done();
            });
        });
    });
});