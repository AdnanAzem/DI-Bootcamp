import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_task } from '../app/action';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [selectedDate, setSelectedDate] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(add_task(task, selectedDate));
      setTask('');
      setSelectedDate('')
    }
  };

  const handleDateChange =(e) =>{
    setSelectedDate(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        required
      />

      <label>Chose your date:</label>
      <input 
      type='date' 
      value ={selectedDate} 
      onChange={handleDateChange}
      required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
