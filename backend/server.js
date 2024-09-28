import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//import bodyParser from "body-parser"; => we are using express.json()

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();

app.use(express.json()); //instead of app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server is up on port 5000");
});
