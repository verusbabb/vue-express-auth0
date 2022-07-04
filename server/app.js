import express from "express";
// import api from "./api";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./api/routes/user.js";
import eventRoutes from "./api/routes/event.js";
import registrationRoutes from "./api/routes/registration.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("static"));
app.use(morgan("dev"));
app.use(userRoutes);
app.use(eventRoutes);
app.use(registrationRoutes);

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("connected", () => {
  console.log("Database Connected!");
});

app.listen(port, () => {
  console.log(`API Server Listening on port ${port}`);
});

export const App = app;
