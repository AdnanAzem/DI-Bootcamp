import { useState, useReducer, useRef } from "react";
// import { counterReducer } from "./counterReducer";
import "./App.css";

/**
 * state initial state = {}
 * reducer function
 */

const initialState = {
  count: 10,
  task: [],
  status: "edit",
};
/**
 * action = {}
 */
export const counterReducer = (state, action) => {
  console.log(action);
  if (action?.type === "increment") {
    //.. open ai
    return { ...state, count: state.count + 1 };
  } else if (action?.type === "decrement") {
    return { ...state, count: state.count - 1 };
  } else if (action?.type === "multiple") {
    return { ...state, count: state.count * 2 };
  } else if (action?.type === "incrementByVal") {
    return { ...state, count: state.count + Number(action.payload.num1) };
  }
  return state;
};

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(counterReducer, initialState);
  // console.log(state);

  const valueRef = useRef();

  return (
    <>
      <h2>useState vs. useReducer</h2>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>Counter Reducer: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}> +1 </button>
        <button onClick={() => dispatch({ type: "decrement" })}> -1 </button>
        <button onClick={() => dispatch({ type: "multiple" })}> X2 </button>
        <div>
          <input ref={valueRef} />
          <button
            onClick={() =>
              dispatch({
                type: "incrementByVal",
                payload: { num1: valueRef.current.value, num2: 33 },
              })
            }
          >
            Increse by Value
          </button>
        </div>
        <button onClick={() => dispatch()}> undifined action </button>
      </div>
    </>
  );
}

export default App;
