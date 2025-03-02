// Array to store tasks
const tasks = [];

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');

// Function to add a task
function addTask(event) {
  event.preventDefault(); // Prevent form submission

  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert('Please enter a task!');
    return;
  }

  // Create a new task object
  const newTask = {
    task_id: tasks.length,
    text: taskText,
    done: false,
  };

  // Add the task to the array
  tasks.push(newTask);

  // Add the task to the DOM
  renderTask(newTask);

  // Clear the input field
  taskInput.value = '';
}

// Function to render a single task in the DOM
function renderTask(task) {
  // Create the task element
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.setAttribute('data-task-id', task.task_id);

  // Checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.addEventListener('change', () => doneTask(task.task_id));

  // Task label
  const label = document.createElement('label');
  label.textContent = task.text;

  // Delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

  // Append elements to the task div
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(deleteBtn);

  // Add the task div to the DOM
  listTasks.appendChild(taskDiv);

  // Update the task's appearance based on its "done" status
  if (task.done) {
    taskDiv.classList.add('completed');
  }
}

// Function to mark a task as done
function doneTask(taskId) {
  const task = tasks.find((t) => t.task_id === taskId);
  if (task) {
    task.done = !task.done; // Toggle the "done" status
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    taskElement.classList.toggle('completed');
  }
}

// Function to delete a task
function deleteTask(taskId) {
  // Remove the task from the array
  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }

  // Remove the task from the DOM
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
  if (taskElement) {
    taskElement.remove();
  }
}

// Event listener for form submission
taskForm.addEventListener('submit', addTask);

// Initial rendering of tasks (if any)
tasks.forEach((task) => renderTask(task));