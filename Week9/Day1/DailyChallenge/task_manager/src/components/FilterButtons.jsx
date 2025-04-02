import { useTasks } from '../context/TaskContext';

const FilterButtons = () => {
  const { state, dispatch } = useTasks();
  
  return (
    <div className="filter-buttons">
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
        className={state.filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
        className={state.filter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
        className={state.filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;