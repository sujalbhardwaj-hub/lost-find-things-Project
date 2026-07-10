import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./server/config/db.js";
import itemRoutes from "./server/routes/itemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lost & Found API Running...");
});

app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});