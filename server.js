import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import errorHandler from "./middlewares/errorHandler.js";
import tunesRouter from "./routes/route-tunes.js";
import logger from "./middlewares/logger.js";
import cors from "cors";

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_STRING);
const database = mongoose.connection;

// Middlewares
app.use(express.json());
app.use(logger);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/api/tunes", tunesRouter);

// Emit listeners
database.on("error", (error) => console.log(error));

database.once("connected", () => {
  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});

// ErrorHandling
app.use(errorHandler);
