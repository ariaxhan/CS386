const mongoose = require('mongoose'); //Load mongoose
let schemaUser = mongoose.Schema({ //Define schema
	course: {
		type: Number,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true,
		default: 'unknown'
	},
	email: {
		type: String,
		required: true,
		default: 'unknown'
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	},
	date: {
		type: String,
		default: Date()
	}
})
module.exports = mongoose.model('User', schemaUser);//Create and export model


