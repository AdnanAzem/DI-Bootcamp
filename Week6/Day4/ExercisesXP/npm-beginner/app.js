// Import the chalk package
const chalk = require('chalk');

// Use chalk to style text
console.log(chalk.default.red.bold('This is a bold red error message!'));
console.log(chalk.default.green('Success: ') + chalk.default.blue.underline('Operation completed.'));
console.log(chalk.default.yellow.bgBlack('Warning: ') + 'This is a warning message.');
console.log(chalk.default.cyan('Info: ') + 'This is an informational message.');