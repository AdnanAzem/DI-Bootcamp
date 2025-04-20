import { useSelector, connect } from "react-redux";

import TaskRemove from "./TaskRemove";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  console.log(tasks);
  return (
    <>
      <h2>List of Tasks</h2>
      {tasks &&
        tasks.map((item) => {
          return (
            <div key={item.id}>
              {item.name} {item.date}
              <TaskRemove id={item.id} />
            </div>
          );
        })}
    </>
  );
};
export default TasksList;
