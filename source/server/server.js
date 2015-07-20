'use strict';

var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('config');
var promise = require('bluebird');
promise.promisifyAll(require('mysql/lib/Connection').prototype);

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.databasePassword,
  database: 'communityCasts'
});
connection.connect();

var app = express();

app.use(cors());
app.use(bodyParser.json());

var screencastsController = require('./controllers/screencastsController')(connection);
app.get('/screencasts/top/:period', screencastsController.sendScreencasts);
app.post('/screencasts', screencastsController.createScreencast);
app.get('/screencasts/:screencastId', screencastsController.redirectToScreencast);

app.listen(3000);

module.exports = app;
