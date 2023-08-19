const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router
  .get("/users", userController.getAllUsers)
  .get("/users/:id", userController.getUser)
  .post("/signup", userController.createUser)
  .post("/login", userController.checkUser)
  .delete("/delete/:id", userController.deleteUser)
  .patch("/update/:id", userController.updateUser);

exports.router = router;
