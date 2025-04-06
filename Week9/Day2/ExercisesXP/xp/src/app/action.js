import { v4 as uuidv4 } from 'uuid'
export const INCREMENT ='add'
export const DECREMENT = 'minus'
export const COMPLETION = 'done'

export const increment = (task) => {
    return{
        type:INCREMENT,
        payload:{id: uuidv4(), task, completed: false}
    }
}

export const decrement = (id) => {
    return{
        type:DECREMENT,
        payload:id
    }
}

export const completion = (id) => {
    return{
        type:COMPLETION,
        payload:id
    }
}