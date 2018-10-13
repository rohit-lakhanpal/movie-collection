var should = require('should');
var request = require('supertest');
var svc = require('../../services/moviesService');

describe('services', function () {
    describe('moviesService', function () {
        describe('#getAll', function () {
            it('should exist', function () {
                var sut = svc();                
                
                // Validate function exists
                (sut.getAll).should.be.ok();
                should(sut.getAll !== null).equal(true);

                // Validate is function
                should(sut.getAll.constructor === Function).equal(true);
            });

            it('should return an array', function () {
                var sut = svc();   

                // Validate function result
                should((sut.getAll()).constructor === Array).equal(true);                
            });
        });

        describe('#getById', function () {
            it('should exist', function () {
                var sut = svc();                
                
                // Validate function exists
                (sut.getById).should.be.ok();
                should(sut.getById !== null).equal(true);

                // Validate is function
                should(sut.getById.constructor === Function).equal(true);
            });

            it('should return null when no id specified', function () {
                var sut = svc();                

                // Validate is function
                should(sut.getById() === null).equal(true);
            });

            it('should return null when id not found', function () {
                var sut = svc();                

                // Validate is function
                should(sut.getById(-1) === null).equal(true);
            });

            it('should respond with a movie', function () {
                var sut = svc();                

                // Validate is function                
                should(sut.getById(1).id === 1).equal(true);
            });
        });        

        describe('#save', function () {
            it('should exist', function () {
                var sut = svc();                
                
                // Validate function exists
                (sut.save).should.be.ok();
                should(sut.save !== null).equal(true);

                // Validate is function
                should(sut.save.constructor === Function).equal(true);
            });
        });

        describe('#update', function () {
            it('should exist', function () {
                var sut = svc();                
                
                // Validate function exists
                (sut.update).should.be.ok();
                should(sut.update !== null).equal(true);

                // Validate is function
                should(sut.update.constructor === Function).equal(true);
            });
        });

        describe('#deleteById', function () {
            it('should exist', function () {
                var sut = svc();                
                
                // Validate function exists
                (sut.deleteById).should.be.ok();
                should(sut.deleteById !== null).equal(true);

                // Validate is function
                should(sut.deleteById.constructor === Function).equal(true);
            });
        });
    });
});