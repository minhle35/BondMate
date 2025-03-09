require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


// Create Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000" 
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const MONGO_URI = "mongodb+srv://20820099:rNXVtbXSiaSqxja6@bondmate.iy8r3.mongodb.net/?retryWrites=true&w=majority&appName=bondmate";
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

// Simple route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BondMate API." });
});

// Import and use routes
app.get("/api/test", (req, res) => {
  res.json({ status: "API is working" });
});

// Port configuration
const PORT = process.env.SERVER_PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});