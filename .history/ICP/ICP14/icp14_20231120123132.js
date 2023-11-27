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
				courseID: "CS110",
				name: 'Introduction to Computer Science',
				preReqs: ["CS107", "Math109"],
				active: true
			}).save();
			new CSCourse({
				courseID: "Math 109",
				name: 'Calculus I',
				preReqs: [],
				active: true
			}).save();
			new CSCourse({
				courseID: "CS107",
				name: 'Computing, Mobile Apps, & Web',
				preReqs: [],
				active: true
			}).save();
		
	}
});