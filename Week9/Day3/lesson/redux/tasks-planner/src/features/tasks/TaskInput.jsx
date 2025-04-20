import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { useRef } from "react";

const TaskInput = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();

  const addNewTask = () => {
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    if (name.trim() === "") return;
    dispatch(addTask(name, date));
  };

  return (
    <>
      <input ref={nameRef} placeholder='Task name...' />
      <input ref={dateRef} type='date' />
      <button onClick={() => addNewTask()}>Add Task</button>
    </>
  );
};
export default TaskInput;
