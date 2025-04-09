// AddTaskForm.js
import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories } from '../features/selectors';
import { addTask } from '../features/taskSlice';

const AddTaskForm = ({ selectedCategoryId }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Initialize with selectedCategoryId if it exists
  const [categoryId, setCategoryId] = useState(selectedCategoryId || '');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        categoryId: categoryId ? parseInt(categoryId) : null, // Ensure it's a number or null
        progress: 0,
        completed: false
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
      // Keep the selected category if one was chosen
      if (!selectedCategoryId) {
        setCategoryId('');
      }
    }
  }, [dispatch, title, description, categoryId, selectedCategoryId]);

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">No category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;