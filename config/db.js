const mongoose = require("mongoose");
const username = encodeURIComponent("root");
const password = encodeURIComponent("root");
const MONGO_URI = `mongodb+srv://${username}:${password}@user-api.ktizpgh.mongodb.net/?retryWrites=true&w=majority&appName=user-api`;
const db = MONGO_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("MongoDB is connected");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
