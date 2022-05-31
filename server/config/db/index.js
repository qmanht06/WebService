const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://qmanh01:quangmanh01@webserver.0u0bdvd.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

module.exports = { connectDB }