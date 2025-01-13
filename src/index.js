import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/dbConfiguration.js";

dotenv.config();

const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
