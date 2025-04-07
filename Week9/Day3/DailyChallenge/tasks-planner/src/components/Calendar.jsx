import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../features/tasks/tasksSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  const handleDateChange = (e) => {
    dispatch(selectDate(e.target.value));
  };

  return (
    <div className="calendar">
      <h2>Select Date</h2>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={handleDateChange} 
      />
    </div>
  );
};

export default Calendar;