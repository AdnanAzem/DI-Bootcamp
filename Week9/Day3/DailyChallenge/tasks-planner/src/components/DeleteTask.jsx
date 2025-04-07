import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/tasksSlice';

const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);
  const [confirming, setConfirming] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask({
      date: selectedDate,
      taskId,
    }));
    setConfirming(false);
  };

  return (
    <div className="delete-task">
      {confirming ? (
        <div>
          <p>Are you sure?</p>
          <button onClick={handleDelete}>Yes, delete</button>
          <button onClick={() => setConfirming(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setConfirming(true)}>Delete</button>
      )}
    </div>
  );
};

export default DeleteTask;