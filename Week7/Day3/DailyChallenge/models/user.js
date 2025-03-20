const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../users.json');

// Read users from the JSON file
const readUsers = () => {
  const data = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(data);
};

// Write users to the JSON file
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

// Hash a password
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Compare a password with its hash
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { readUsers, writeUsers, hashPassword, comparePassword };