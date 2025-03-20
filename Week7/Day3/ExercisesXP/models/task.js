const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const readTasks = () => {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
};

const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
};

module.exports = {
    readTasks,
    writeTasks
}