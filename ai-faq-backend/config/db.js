const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Agar local database connection fail ho, toh yeh crash nahi karega
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:21017/ai-faq';
    
    console.log("Connecting to MongoDB...");
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 // 5 second mein connect nahi hua toh skip karega
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`⚠️ MongoDB Connection Skipped: ${error.message}`);
    console.log("Tip: Local MongoDB start nahi hai, par aapka server chalta rahega!");
  }
};

module.exports = connectDB;