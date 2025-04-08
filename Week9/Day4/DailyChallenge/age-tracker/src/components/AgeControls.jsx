// src/components/AgeControls.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/ageSlice';

const AgeControls = () => {
  const dispatch = useDispatch();

  const handleAgeUp = () => {
    dispatch(ageUpAsync(1)); // Increment by 1
  };

  const handleAgeDown = () => {
    dispatch(ageDownAsync(1)); // Decrement by 1
  };

  return (
    <div className="age-controls">
      <button onClick={handleAgeUp} disabled={false}>
        Age Up
      </button>
      <button onClick={handleAgeDown} disabled={false}>
        Age Down
      </button>
    </div>
  );
};

export default AgeControls;