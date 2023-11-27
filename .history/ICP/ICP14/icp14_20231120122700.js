const connectDB = require('./modules/db.js'); //Get connectDB function

connectDB(true); //Open database connection

const modelUser = require('./models/CreateCSCourses.js'); //Get model
const { connect } = require('http2');
modelUser.find()
	.then(function (users) {
		if (users.length) {
			console.log('Object Already Exists');
			connectDB(false); //Close database connection
		} else {
			new CSCourse({
				cou
			}).save();
		
	}
});