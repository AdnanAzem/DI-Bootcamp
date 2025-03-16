import fs from 'fs/promises'; 

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(`Content of ${filePath}:\n${data}`);
        return data;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
    }
}

async function writeFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Successfully wrote to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file ${filePath}:`, error);
    }
}


export { readFile, writeFile };
