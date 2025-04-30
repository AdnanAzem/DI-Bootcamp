import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface User {
  id: number;
  username: string;
}

interface Story {
  id: number;
  title: string;
}

const AddContributor: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [myStories, setMyStories] = useState<Story[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedStoryId, setSelectedStoryId] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');

  // Fetch user's own stories
  useEffect(() => {
    const fetchMyStories = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/stories/mine`, {
          withCredentials: true,
        });
        setMyStories(res.data);
      } catch (error) {
        toast.error('Failed to fetch your stories');
      }
    };

    fetchMyStories();
  }, []);

  // Fetch all users to choose contributors
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/auth/users`, {
          withCredentials: true,
        });
        setUsers(res.data);
      } catch (error) {
        toast.error('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedStoryId || !selectedUserId) {
      toast.error('Please select both story and user');
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}/api/contributors`,
        {
          story_id: selectedStoryId,
          user_id: selectedUserId,
        },
        { withCredentials: true }
      );

      toast.success('Contributor added successfully');
      setSelectedStoryId('');
      setSelectedUserId('');
    } catch (error) {
      toast.error('Failed to add contributor');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Contributor to a Story</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="select select-bordered w-full"
          value={selectedStoryId}
          onChange={(e) => setSelectedStoryId(e.target.value)}
        >
          <option disabled value="">
            Select a story
          </option>
          {myStories.map((story) => (
            <option key={story.id} value={story.id}>
              {story.title}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered w-full"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
        >
          <option disabled value="">
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>

        <button type="submit" className="btn btn-primary w-full">
          Add Contributor
        </button>
      </form>
    </div>
  );
};

export default AddContributor;
