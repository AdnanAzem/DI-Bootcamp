import { useState, useRef } from 'react';
import { useTasks } from '../context/TaskContext';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef(null);
  const { dispatch } = useTasks();

  const handleEdit = () => {
    setIsEditing(true);
    // Focus the input field when editing starts
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, newText: editedText }
      });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditedText(task.text);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
      />
      
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="edit-input"
        />
      ) : (
        <span onDoubleClick={handleEdit}>{task.text}</span>
      )}
      
      <div className="task-actions">
        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>
        <button 
          onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;