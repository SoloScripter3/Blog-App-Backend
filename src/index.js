import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/dbConfiguration.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/posts", postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
