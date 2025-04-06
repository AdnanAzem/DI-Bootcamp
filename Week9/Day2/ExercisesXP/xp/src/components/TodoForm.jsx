// components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../app/action';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(increment(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
