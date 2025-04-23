// src/components/UserCard.tsx
import React from 'react';
import './UserCard.css';

// Define interface for component props
interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
  email?: string;
  isActive?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  name = 'Anonymous',
  age = 0,
  role = 'Guest',
  email = 'Not provided',
  isActive = false
}) => {
  return (
    <div className={`user-card ${isActive ? 'active' : ''}`}>
      <div className="user-avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info">
        <h3>{name}</h3>
        <div className="user-details">
          <p><strong>Age:</strong> {age > 0 ? age : 'Unknown'}</p>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Status:</strong> {isActive ? 'Active' : 'Inactive'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;