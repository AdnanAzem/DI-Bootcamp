import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;