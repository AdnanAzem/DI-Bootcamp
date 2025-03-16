// app.js

import { TodoList } from './todo.js';

// Create an instance of TodoList
const todoList = new TodoList();

// Add tasks
todoList.addTask("Buy groceries");
todoList.addTask("Read a book");
todoList.addTask("Go for a walk");

// List all tasks
todoList.listAllTasks();

// Mark a task as complete
todoList.markTaskAsComplete("Read a book");

// List all tasks again
todoList.listAllTasks();