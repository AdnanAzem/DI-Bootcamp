const { readUsers, writeUsers, hashPassword, comparePassword } = require('../models/user');

// Register a new user
const registerUser = async (req, res) => {
  console.log('Request Body:', req.body);
  const { name, lastName, email, username, password } = req.body;
  

  if (!name || !lastName || !email || !username || !password) {
    console.log(username, email, password, lastName, name);
    return res.status(400).json({ error: 'All fields are required' });
  }

  const users = readUsers();
  const userExists = users.some((user) => user.username === username || user.email === email);

  if (userExists) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  const hashedPassword = await hashPassword(password);
  const newUser = { id: Date.now(), name, lastName, email, username, password: hashedPassword };
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Login a user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const users = readUsers();
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  res.status(200).json({ message: 'Login successful', user });
};

// Get all users (for demonstration purposes)
const getAllUsers = (req, res) => {
  const users = readUsers();
  res.status(200).json(users);
};

// Get a specific user by ID (for demonstration purposes)
const getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
};

// Update a user by ID (for demonstration purposes)
const updateUser = (req, res) => {
  const { name, lastName, email } = req.body;

  if (!name || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const users = readUsers();
  const userIndex = users.findIndex((user) => user.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users[userIndex] = { ...users[userIndex], name, lastName, email };
  writeUsers(users);

  res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
};

module.exports = { registerUser, loginUser, getAllUsers, getUserById, updateUser };