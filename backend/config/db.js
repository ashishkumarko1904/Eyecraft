// connecting to database logic
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1); //for failure
  }
};
