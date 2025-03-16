// todo.js

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    // Method to add a task
    addTask(task) {
        this.tasks.push({ task, completed: false });
        console.log(`Added task: "${task}"`);
    }

    // Method to mark a task as complete
    markTaskAsComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.completed = true;
            console.log(`Marked task as complete: "${taskName}"`);
        } else {
            console.log(`Task not found: "${taskName}"`);
        }
    }

    // Method to list all tasks
    listAllTasks() {
        console.log("Tasks:");
        if (this.tasks.length === 0) {
            console.log("No tasks found.");
        } else {
            this.tasks.forEach((t, index) => {
                console.log(`${index + 1}. [${t.completed ? 'X' : ' '}] ${t.task}`);
            });
        }
    }
}