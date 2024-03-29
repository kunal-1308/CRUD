const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	hobbies: {
		type: [String],
		required: true,
	},
});

const User = mongoose.model("user", userSchema);

module.exports = User;
