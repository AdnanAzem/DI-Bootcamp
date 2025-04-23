// src/components/Greeting.tsx
import React from 'react';

// Define the interface for component props
interface GreetingProps {
  name: string;
  messageCount?: number; // Optional prop
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ name, messageCount = 0, isLoggedIn }) => {
  return (
    <div className="greeting-container">
      <h2>
        {isLoggedIn 
          ? `Welcome back, ${name}! You have ${messageCount} unread ${messageCount === 1 ? 'message' : 'messages'}`
          : 'Please log in to continue'}
      </h2>
    </div>
  );
};

export default Greeting;