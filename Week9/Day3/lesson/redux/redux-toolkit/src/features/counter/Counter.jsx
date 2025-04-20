import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByVal } from "./counterSlice";
import { useRef } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const valRef = useRef();

  return (
    <>
      <h2>Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> -1 </button>
      <button onClick={() => dispatch(reset())}> reset </button>
      <div>
        <input ref={valRef} />
        <button onClick={() => dispatch(incrementByVal({val1: valRef.current.value}))}>
          Increment by Input value
        </button>
      </div>
    </>
  );
};
export default Counter;
