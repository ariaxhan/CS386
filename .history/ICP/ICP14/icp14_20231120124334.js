const connectDB = require('./modules/db.js'); //Get connectDB function

connectDB(true); //Open database connection

const CSCourse = require('./models/CreateCSCourses.js'); //Get model
CSCourse.find()
	.then(function (courses) {
		if (courses.length) {
			for (let course in courses) {
				if (course.preReqs.) {
					console.log(`Course: ${course.courseID}-${course.name} (Prerequisites: ${course.preReqs})`);
				} else {
					console.log(`Course: ${course.courseID}-${course.name} (Prerequisites: None)`);
				}
			}
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
		connectDB(false); //Close database connection
	}
});