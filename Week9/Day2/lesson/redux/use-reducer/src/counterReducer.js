import { count } from "console";

export const counterReducer = (state, action) => {
    console.log(action);
    if (action.type === "increment") {
      //.. open ai
      return { ...state, count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { ...state, count: state.count - 1 };
    } else if (action.type === "multiple") {
      return { ...state, count: state.count * 2 };
    }
    else if (action.type ==='incrementByVal') {
        return {...state, count: state.count + }
    }
    return state;
  };