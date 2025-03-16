const fs = require('fs').promises;

async function copyFile() {
    try {
        const sourceContent = await fs.readFile('source.txt', 'utf-8');
        console.log('Successfully read from source.txt');
        await fs.writeFile('destination.txt', sourceContent, 'utf-8');
        console.log('Successfully wrote to destination.txt');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

copyFile();