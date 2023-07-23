
const mongoose = require('mongoose')
require("dotenv").config()
module.exports = async () => {
  try {
    await mongoose.connect(
       process.env.DATABASE
      )
    console.log('Connected to MongoDB successfully!');
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a non-zero code
  }
}

// db.js
//const mongoose = require('mongoose');
//
//const connectToDatabase = async () => {
//  try {
//    // Replace 'your-mongodb-connection-string' with your actual MongoDB connection string
//    await mongoose.connect(process.env.DATABASE, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useCreateIndex: true,
//      useFindAndModify: false,
//    });
//
//    console.log('Connected to MongoDB successfully!');
//  } catch (error) {
//    console.error('Error connecting to MongoDB:', error.message);
//    process.exit(1); // Exit the process with a non-zero code
//  }
//};
//
//module.exports = connectToDatabase;
//