const chalk = require('chalk');

const displayMessage = () => {
    console.log(chalk.default.blue('Hello, this is a blue message!'));
    console.log(chalk.default.green('Success! This is a green message.'));
    console.log(chalk.default.red.bold('Error! This is a bold red message.'));
    console.log(chalk.default.yellow.underline('Warning! This is an underlined yellow message.'));
};

module.exports = displayMessage;
