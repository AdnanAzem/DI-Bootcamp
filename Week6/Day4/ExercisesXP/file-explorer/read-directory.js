const fs = require('fs').promises;

async function readDirectory() {
    try {
        const directoryPath = './';
        const files = await fs.readdir(directoryPath);
        console.log('Files in the directory:');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

readDirectory();