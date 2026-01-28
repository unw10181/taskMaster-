require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err.message);
});

module.exports = mongoose.connection;
