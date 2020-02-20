const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;

const db = require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.listen(PORT, () => {
    console.log('App is listening on port ${PORT}');
});