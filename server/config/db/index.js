const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // "mongodb+srv://qmanh01:quangmanh01@webserver.0u0bdvd.mongodb.net/?retryWrites=true&w=majority"
      process.env.MONGO_URI,
      {}
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
