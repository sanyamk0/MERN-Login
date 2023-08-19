const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/user");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => {
    console.log(err.message);
  });
server.use("/", userRouter.router);

server.listen(8000, () => {
  console.log("Server Started");
});
