import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_task, remove_task, completion } from '../app/action'


export const TaskList = () => {
    const task = useSelector(state => state.task)
    const dispatch = useDispatch()

    return (
        <ul>
          {task.map(task => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task}
              </span>
              <span> Date : {task.date}</span>
              <button onClick={() => dispatch(completion(task.id))}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => dispatch(remove_task(task.id))}>Delete</button>
            </li>
          ))}
        </ul>
)
}

export default TaskList