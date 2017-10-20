'use-strict';
const express = require('express');
const config = require('./config/config');
const browserify = require('browserify-middleware');

const app = express();


app.set('view engine', 'pug');

// middleware stuff
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.render("main");
});


app.get('/visualizations', function(req, res) {
    res.render("visualizations");
});

app.get("/scales", function(req, res) {
    res.render("scales");
});

app.listen(config.port, function() {
    console.log("Express server running on port " + config.port + "!");
});


module.exports = {
    app: app
};