const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;

const db = require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.static('./Develop/public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


mongoose.connect(process.env.MONGO_DB || "mongodb://localhost:27017/workoutdb", {useNewUrlParser: true})
app.use(require("./Develop/routes/html.js"))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});