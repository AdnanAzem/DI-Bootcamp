import people from './data.js';

function calculateAverageAge(persons) {
    if (persons.length === 0) return 0;
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    return totalAge / persons.length;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age is: ${averageAge.toFixed(2)}`);

// **************************************************************************************************** //

import { readFile, writeFile } from './fileManager.js';

const helloFile = 'Hello World.txt';
const byeFile = 'Bye World.txt';

async function manageFiles() {
    const content = await readFile(helloFile);

    if (content) {
        await writeFile(byeFile, "Writing to the file");
    }
}

manageFiles();
