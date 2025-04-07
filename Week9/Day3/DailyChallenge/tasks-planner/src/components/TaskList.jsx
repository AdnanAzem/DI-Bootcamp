import React from 'react';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = () => {
  const selectedDate = useSelector(state => state.tasks.selectedDate);
  const tasks = useSelector(state => state.tasks.tasksByDate[selectedDate] || []);

  return (
    <div className="task-list">
      <h2>Tasks for {new Date(selectedDate).toLocaleDateString()}</h2>
      <AddTask />
      {tasks.length === 0 ? (
        <p>No tasks for this day. Add one!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
              </div>
              <div className="task-actions">
                <EditTask task={task} />
                <DeleteTask taskId={task.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;