const connString = require('./modules/credentials.js').mongo.connectionString; //Get connection string from credentials file
const mongoose = require('mongoose'); //Get mongoose
const connectDB = require('./modules/db.js'); //Get connectDB function

connectDB(true); //Open database connection

const modelUser = require('./models/CreateUserSchema.js'); //Get model
const dataUser = 
connectDB(false); //Close database connection