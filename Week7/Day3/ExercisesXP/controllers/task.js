const {readTasks, writeTasks} = require('../models/task');


const getAllTasks = (req, res) => {
    try {
        const tasks = readTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve tasks" });
    }
};

const getTaskById = (req, res) => {
    try{
        const tasks = readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve task" });
    }
};

const createTask = (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
          return res.status(400).json({ error: 'Title and description are required' });
        }
        const tasks = readTasks();
        const newTask = { id: tasks.length + 1, title, description };
        tasks.push(newTask);
        writeTasks(tasks);
        res.status(201).json(newTask);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

const updateTask = (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
          return res.status(400).json({ error: 'Title and description are required' });
        }
    
        const tasks = readTasks();
        const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
        if (taskIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        tasks[taskIndex] = { ...tasks[taskIndex], title, description };
        writeTasks(tasks);
    
        res.status(200).json(tasks[taskIndex]);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

const deleteTask = (req, res) => {
    res.send('Delete task from controller');
    try {
        const tasks = readTasks();
        const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
        if (taskIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        tasks.splice(taskIndex, 1);
        writeTasks(tasks);
    
        res.status(204).send();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}