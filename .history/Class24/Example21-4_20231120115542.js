const connString = require('./modules/credentials.js').mongo.connectionString; //Get connection string from credentials file
const mongoose = require('mongoose'); //Get mongoose
const connectDB = require('./modules/db.js'); //Get connectDB function

connectDB(true); //Open database connection

const modelUser = require('./models/CreateUserSchema.js'); //Get model
modelUser.find()
	.then(function (users) {
		if (users.length) {
		
	}
	console.log(dataUser);
	connectDB(false); //Close database connection
});