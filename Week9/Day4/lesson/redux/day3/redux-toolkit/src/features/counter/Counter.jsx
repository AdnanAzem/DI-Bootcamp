import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByVal,
  incrementWithPrepare,
  delay5sec,
  delayIncrementAsync,
} from "./counterSlice";
import { useRef } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const status = useSelector((state) => state.counterReducer.status);
  const dispatch = useDispatch();

  const valRef = useRef();

  const addOne5Sec = () => {
    setTimeout(() => {
      dispatch(increment());
    }, 5 * 1000);
  };

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "error") return <h2>Error...</h2>;
  return (
    <>
      <h2>Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> -1 </button>
      <button onClick={() => dispatch(reset())}> reset </button>
      <button onClick={() => dispatch(delayIncrementAsync())}>
        {" "}
        Add 1 After 5 sec{" "}
      </button>
      <div>
        <input ref={valRef} />
        <button onClick={() => dispatch(incrementByVal({ a: 3, b: 5678 }))}>
          Increment by Input value
        </button>
        <button onClick={() => dispatch(incrementWithPrepare(3, 4, 5))}>
          Increment With Prepare Payload
        </button>
      </div>
    </>
  );
};
export default Counter;
