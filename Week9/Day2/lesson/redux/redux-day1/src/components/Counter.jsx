import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </>
  );
};
export default Counter;
