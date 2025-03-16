// app.js

// Import the lodash package
const _ = require('lodash');

// Import the custom math module
const { add, multiply } = require('./math');

// Perform calculations using the math module
const sum = add(10, 5); // Add two numbers
const product = multiply(10, 5); // Multiply two numbers

// Use lodash to calculate the maximum value in an array
const numbers = [1, 2, 3, 4, 5];
const maxNumber = _.max(numbers);

// Display the results
console.log(`Addition: 10 + 5 = ${sum}`);
console.log(`Multiplication: 10 * 5 = ${product}`);
console.log(`Maximum number in [${numbers.join(', ')}]: ${maxNumber}`);