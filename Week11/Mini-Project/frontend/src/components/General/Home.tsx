// src/components/Home.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories, deleteStory } from "../../features/storySlice";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { stories, loading, error } = useSelector(
    (state: RootState) => state.story
  );
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      dispatch(deleteStory(id))
        .unwrap()
        .then(() => toast.success("Story deleted successfully!"))
        .catch(() => toast.error("Failed to delete story"));
    }
  };

  const handleRemoveContributor = async (
    storyId: number,
    contributorId: number
  ) => {
    try {
      await axios.delete(`${BASE_URL}/api/contributors/${contributorId}`, {
        data: { storyId, contributorId },
        withCredentials: true,
      });
      toast.success("Contributor removed");
      dispatch(fetchStories());
    } catch (error) {
      toast.error("Failed to remove contributor");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Stories</h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <div key={story.id} className="card shadow-xl bg-base-100 p-6">
            <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
            <p className="text-gray-700 mb-4">{story.content}</p>

            {story.contributors && story.contributors?.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">👥 Contributors:</h4>
                <ul className="space-y-1">
                  {story.contributors.map((contributor) => (
                    <li key={contributor.id} className="flex gap-2 justify-center items-center text-sm">
                      <span>{contributor.user?.username}</span>
                      {auth.user?.userId === story.author_id && (
                        <button
                          onClick={() => handleRemoveContributor(story.id, contributor.id)}
                          className="btn btn-xs btn-error"
                        >
                          Remove
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              {(auth.user?.userId === story.author_id ||
                story.contributors?.some((c) => c.user_id === auth.user?.userId)) && (
                <button
                  onClick={() => navigate(`/edit/${story.id}`)}
                  className="btn btn-sm btn-primary"
                >
                  ✏️ Edit
                </button>
              )}

              {auth.user?.userId === story.author_id && (
                <button
                  onClick={() => handleDelete(story.id)}
                  className="btn btn-sm btn-error"
                >
                  🗑️ Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
