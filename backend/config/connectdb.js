const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL, {});
    console.log(
      "connected at:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    // Optionally retry after some time
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectdb;
