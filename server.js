// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors middleware

// Create Express app
const app = express();

// Use body-parser middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use cors middleware to enable CORS
app.use(cors()); // Enable CORS for all routes

// Define routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the RESTful API!" });
});

app.get("/api/users", (req, res) => {
    // Retrieve list of users from database or other data source
    // and send as JSON response
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "James" },
    ];
    res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    // Retrieve user by ID from database or other data source
    // and send as JSON response
    const userId = req.params.id;
    const user = { id: userId, name: "John" };
    res.json(user);
});

app.post("/api/users", (req, res) => {
    // Create a new user in the database or other data source
    // based on request body and send success status as response
    const newUser = req.body;
    // Insert new user into database and get the newly created user ID
    const userId = 4; // Assuming newly created user ID is 4
    res.status(201).json({ id: userId, message: "User created successfully" });
});

app.put("/api/users/:id", (req, res) => {
    // Update user by ID in the database or other data source
    // based on request body and send success status as response
    const userId = req.params.id;
    const updatedUser = req.body;
    // Update user in database and get the updated user
    const user = { id: userId, name: updatedUser.name };
    res.json(user);
});

app.delete("/api/users/:id", (req, res) => {
    // Delete user by ID from the database or other data source
    // based on request body and send success status as response
    const userId = req.params.id;
    // Delete user from database and send success status
    res.json({ message: `User with ID ${userId} deleted successfully` });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
