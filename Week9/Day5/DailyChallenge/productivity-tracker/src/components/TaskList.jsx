// TaskList.js
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory, selectCategoryById } from '../features/selectors';
import { editTask, deleteTask, toggleTaskCompletion, updateTaskProgress } from '../features/taskSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => 
    categoryId ? selectTasksByCategory(state, categoryId) : state.tasks.tasks
  );
  const category = useSelector(state => 
    categoryId ? selectCategoryById(state, categoryId) : null
  );
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleEditClick = useCallback((task) => {
    setEditingTaskId(task.id);
    setEditedTask({ ...task });
  }, []);

  const handleSaveClick = useCallback(() => {
    dispatch(editTask(editedTask));
    setEditingTaskId(null);
  }, [dispatch, editedTask]);

  const handleDeleteClick = useCallback((taskId) => {
    dispatch(deleteTask(taskId));
  }, [dispatch]);

  const handleToggleComplete = useCallback((taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  }, [dispatch]);

  const handleProgressChange = useCallback((taskId, progress) => {
    dispatch(updateTaskProgress({ id: taskId, progress }));
  }, [dispatch]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div className="task-list">
      <h2 style={{ color: category?.color }}>{category?.name || 'All Tasks'}</h2>
      {tasks.length === 0 ? (
        <p>No tasks found. Add your first task using the form above!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {editingTaskId === task.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={editedTask.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="description"
                    value={editedTask.description}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </div>
              ) : (
                <>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="progress-container">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={task.progress}
                      onChange={(e) => handleProgressChange(task.id, parseInt(e.target.value))}
                    />
                    <span>{task.progress}%</span>
                  </div>
                  <div className="task-actions">
                    <button onClick={() => handleToggleComplete(task.id)}>
                      {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => handleEditClick(task)}>Edit</button>
                    <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;