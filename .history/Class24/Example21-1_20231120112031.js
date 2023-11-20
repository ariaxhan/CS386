const connString = require('./credentials.js').mongo.connectionString; //Get connection string from credentials file
const mongoose = require('mongoose'); //Get mongoose
const connectDB = require('./db.js'); //Get connectDB function