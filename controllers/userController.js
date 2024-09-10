const User = require('../models/userModels.js');

// @desc    Register a new user
// @route   POST /api/users
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get a user by ID
// @route   GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update a user
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
