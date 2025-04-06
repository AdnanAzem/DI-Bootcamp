import { INCREMENT, DECREMENT,  COMPLETION} from "./action";

const initialState = {
    todo:[]
}

export const todoReducer = (state = initialState,  action) => {

    switch(action.type){
        case INCREMENT:
            return {...state, 
                todo: [...state.todo, 
                    action.payload
                ]
            }

        case DECREMENT:
            return {...state, 
                todo: state.todo.filter(todo=>todo.id !== action.payload)}

        case COMPLETION:
            return {...state, 
                todo: state.todo.map(todo=>
                    todo.id === action.payload ? {... todo, completed: !todo.completed} : todo
                )
            }
        default:
            return state; 
    }
}

