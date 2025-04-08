// src/components/AgeDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const { value, loading } = useSelector((state) => state.age);

  return (
    <div className="age-display">
      <h2>Your age: {value}</h2>
      {loading && (
        <div className="spinner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          <span>Updating age...</span>
        </div>
      )}
    </div>
  );
};

export default AgeDisplay;