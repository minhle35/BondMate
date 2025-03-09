const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection URI from .env
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;