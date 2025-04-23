// src/components/UserList.tsx
import React, { useState, useEffect } from 'react';
import { User, UserListState } from '../types';
import './UserList.css';

const UserList: React.FC = () => {
  const [state, setState] = useState<UserListState>({
    users: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({
          users: data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          users: [],
          loading: false,
          error: error instanceof Error ? error.message : 'An unknown error occurred',
        });
      }
    };

    fetchUsers();
  }, []);

  const { users, loading, error } = state;

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p className="catchphrase">"{user.company.catchPhrase}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;