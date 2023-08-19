const model = require("../model/user");
const User = model.User;

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
exports.createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
exports.checkUser = async (req, res) => {
  const user = await User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });
  if (user) {
    res.json(user);
  } else {
    res.status(305).json("User Not Found");
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.json("User Deleted");
  } catch (err) {
    console.log(err);
  }
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
  }
};
