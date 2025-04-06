import { v4 as uuidv4 } from 'uuid'
export const ADD_TASK ='add'
export const REMOVE_TASK = 'minus'
export const COMPLETION = 'done'

export const add_task = (task, date) => {
    return{
        type:ADD_TASK,
        payload:{id: uuidv4(), date, task, completed: false}
    }
}

export const remove_task = (id) => {
    return{
        type:REMOVE_TASK,
        payload:id
    }
}

export const completion = (id) => {
    return{
        type:COMPLETION,
        payload:id
    }
}