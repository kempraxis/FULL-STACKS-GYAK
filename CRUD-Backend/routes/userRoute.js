// Import the express module
import express from "express";

// Import controller functions for handling user routes
import { fetch } from "../controller/userController.js";

// Create a new router instance
const route = express.Router();

// Define routes and their corresponding controller functions
route.get("/fetch", fetch); // Route to fetch all users


// Export the router
export default route;