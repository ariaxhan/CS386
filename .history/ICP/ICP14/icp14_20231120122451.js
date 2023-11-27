const connectDB = require('./modules/db.js'); //Get connectDB function

connectDB(true); //Open database connection

const modelUser = require('./models/CreateUserSchema.js'); //Get model
const { connect } = require('http2');
modelUser.find()
	.then(function (users) {
		if (users.length) {
			console.log('Object Already Exists');
			connectDB(false); //Close database connection
		} else {
			console.log('Seed Data');
			new modelUser({
				id: 1,
				name: 'John Doe',
				email: 'johndoe@gmail.com'
			}).save();
			new modelUser({
				id: 2,
				name: 'Mary Doe',
				email: 'marydoe@gmail.com'
			}).save()
				.then(function () {
				console.log('Done creating data');
				connectDB(false); //Close database connection
			});
		
	}
});