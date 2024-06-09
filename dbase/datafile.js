const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

// Connecting to my database

const connectToDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error reaching DB");
  }
}

module.exports = connectToDB