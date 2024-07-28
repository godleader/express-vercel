const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const ErrorResponseObject = require('./common/http').ErrorResponseObject;
const connectDB = require('./config').connectDB;

const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use('/', routes);

// default catch all handler
app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('route not found')));

module.exports = app;
