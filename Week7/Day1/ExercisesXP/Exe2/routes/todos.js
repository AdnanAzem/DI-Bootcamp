const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const todo = {
        id: todos.length + 1,
        name: req.body.name,
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(todoId));
    if (todoIndex !== -1) {
        todos[todoIndex] = updatedTodo;
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(todoId));
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.json({ message: 'To-do item deleted successfully' });
    } else {
        res.status(404).json({ message: 'To-do item not found' });
    }
});

module.exports = router;