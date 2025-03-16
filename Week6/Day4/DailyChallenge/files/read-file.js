const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file-data.txt');

function readFileContent() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File content:\n', data);
    });
}

module.exports = readFileContent;

