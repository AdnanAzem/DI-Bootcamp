import { ADD_TASK, REMOVE_TASK,  COMPLETION} from "./action";

const initialState = {
    task:[]
}

export const taskReducer = (state = initialState,  action) => {

    switch(action.type){
        case ADD_TASK:
            return {...state, 
                task: [...state.task, 
                    action.payload
                ]
            }

        case REMOVE_TASK:
            return {...state, 
                task: state.task.filter(task=>task.id !== action.payload)}

        case COMPLETION:
            return {...state, 
                task: state.task.map(task=>
                    task.id === action.payload ? {... task, completed: !task.completed} : task
                )
            }
        default:
            return state; 
    }
}

