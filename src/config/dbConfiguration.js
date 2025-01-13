import * as mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected succesfully");
  } catch (err) {
    console.log("error while connecting");
  }
};

export default connectDB;
