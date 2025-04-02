import { useTasks } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { state } = useTasks();
  
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <ul className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <p className="no-tasks">No tasks found</p>
      )}
    </ul>
  );
};

export default TaskList;