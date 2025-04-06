import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, completion } from '../app/action'


export const TodoList = () => {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    return (
        <ul>
          {todo.map(todo => (
            <li key={todo.id}>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
              </span>
              <button onClick={() => dispatch(completion(todo.id))}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => dispatch(decrement(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
)
}

export default TodoList