//const declarations
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
const User = require("./models/user");

app.use(express.json());
connectDB();

// Dummy call to check if application is running as expected
app.get("/", (req, res) => {
	res.send("Hi , application is running");
});

// Get list of all users present in DB
app.get("/api/users", (req, res) => {
	// res.send("Users API");
	User.find()
		.then((user) => res.json(user))
		.catch((err) => res.status(404).json({ message: "user not found", error: err.message }));
});

// Get user details with id
app.get("/api/users/:userId", (req, res) => {
	res.send("Particular User ID API");
});

// Add a User in DB
app.post("/api/users", (req, res) => {
	User.create(req.body)
		.then((data) => res.json({ message: "user added successfully", data }))
		.catch((err) => res.status(400).json({ message: "Failed to add user", error: err.message }));
});

// Update user with id
app.put("/api/users/:id", (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: "updated successfully", data }))
		.catch((err) => res.status(400).json({ message: "Failed to update user detail", error: err.message }));
});

// Delete user with id
app.delete("/api/users/:id", (req, res) => {
	User.findByIdAndDelete(req.params.id, req.body)
		.then((data) => res.json({ message: "user deleted successfully", data }))
		.catch((err) => res.status(404).json({ message: "user not found", error: err.message }));
});

app.listen(process.env.PORT, () => {
	console.log(`Process started running on port ${process.env.PORT}`);
});
