// src/components/Counter.tsx
import React, { useState } from 'react';

// Define types for the component state
type CounterAction = 'increment' | 'decrement' | 'reset';
type CounterState = {
  value: number;
  lastAction: CounterAction | null;
  actionCount: number;
};

const Counter: React.FC = () => {
  // Initialize state with TypeScript types
  const [counter, setCounter] = useState<CounterState>({
    value: 0,
    lastAction: null,
    actionCount: 0,
  });

  // Helper function to update counter state
  const updateCounter = (newValue: number, action: CounterAction) => {
    setCounter(prev => ({
      value: newValue,
      lastAction: action,
      actionCount: prev.actionCount + 1,
    }));
  };

  // Increment function
  const increment = () => {
    updateCounter(counter.value + 1, 'increment');
  };

  // Decrement function
  const decrement = () => {
    updateCounter(counter.value - 1, 'decrement');
  };

  // Reset function
  const reset = () => {
    updateCounter(0, 'reset');
  };

  return (
    <div className="counter-container">
      <h2>Counter: {counter.value}</h2>
      
      <div className="counter-buttons">
        <button onClick={decrement} disabled={counter.value <= 0}>
          Decrement
        </button>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>

      <div className="counter-info">
        <p>Last action: {counter.lastAction || 'None yet'}</p>
        <p>Total actions: {counter.actionCount}</p>
      </div>
    </div>
  );
};

export default Counter;