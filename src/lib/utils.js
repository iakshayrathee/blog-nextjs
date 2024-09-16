import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
