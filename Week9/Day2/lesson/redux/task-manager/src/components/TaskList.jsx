import { useContext } from "react";
import { TaskContext } from "../App";
import TaskRemove from "./TaskRemove";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  return (
    <>
      <h2>Tasks:</h2>
      {state.tasks.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <TaskRemove id={item.id}/>
          </div>
        );
      })}
    </>
  );
};
export default TaskList;
