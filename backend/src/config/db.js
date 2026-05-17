import mongoose from "mongoose";
import { config } from "./config.js";
const connectDatabase = async () => {
  const mongoUri = config.MONGO_URI;

  // basic error handling, Update it later. 
  mongoose.connection.on("connected", () => {
    console.log(" MongoDB connected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  await mongoose.connect(mongoUri);
};

export default connectDatabase;
