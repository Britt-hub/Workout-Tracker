// export MONGOLAB_URI="mongodb://bloy:ePoy7xtgLiz3jYIN.mlab.com:1316/workout"
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/workout'; 

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
app.use(require("./Develop/routes/api.js"))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});

MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
  
      // do some work here with the database.
  
      //Close connection
      db.close();
    }
  });