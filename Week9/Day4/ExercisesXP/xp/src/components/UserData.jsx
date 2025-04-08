import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, clearUser } from '../features/userSlice';

const UserData = () => {
  const [userId, setUserId] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  const handleFetchUser = () => {
    dispatch(fetchUser(userId));
  };

  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <div className="user-container">
      <h2>User Data</h2>
      
      <div className="user-controls">
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleFetchUser} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch User'}
        </button>
        <button onClick={handleClearUser}>Clear</button>
      </div>

      {loading && <div className="spinner">Loading...</div>}
      
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {data && !loading && (
        <div className="user-details">
          <h3>{data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
          <p>Company: {data.company?.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;