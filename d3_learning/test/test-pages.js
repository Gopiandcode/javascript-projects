'use-strict';

const expect = require('chai').expect;
const request = require('request');
const config = require('../config/config');

describe('Static Files', function() {
    describe('HCI Subsection', function() {
        it('js files', function(done) {
            request('http://localhost:' + config.port + "/static/js/hci-bundle.js", function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('css files', function(done) {
            request('http://localhost:' + config.port + "/static/css/hci.css", function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('Main Section', function() {
        it('js files', function(done) {
            request('http://localhost:' + config.port + "/static/js/main-bundle.js", function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('css files', function(done) {
            request('http://localhost:' + config.port + "/static/css/main.css", function (err, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});

describe('Landing Page', function () {
    it('Status', function (done) {
        request('http://localhost:' + config.port, function (err, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('HCI Page', function () {
    it('Status', function (done) {
        request('http://localhost:' + config.port + "/HCI", function (err, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        })
    });
});