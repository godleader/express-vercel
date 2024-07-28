const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sinolim9:GSgW1BUbMsMiOWnT@cluster0.bkbwpfb.mongodb.net/adsgoogle', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  env: {
    // add environment variables here; e.g
    // sendgridApiKey: process.env.SENDGRID_API_KEY,
  },
};
