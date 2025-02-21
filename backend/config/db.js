const mongoose = require('mongoose');

const connectDb = async () => {
  // Use process.env.MONGO_URI if available, otherwise fallback to local URI
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase";

  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Successfully Connected: " + conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection Error Found");
    console.log(error);
  }
};

module.exports = connectDb;



/*   node .\backend\config\db.js   */