
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { updateStory } from "../../features/storySlice";
import { toast } from "react-toastify";

const EditStory = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/stories/${id}`, {
          withCredentials: true,
        });
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        toast.error("Failed to fetch story");
      }
    };

    fetchStory();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateStory({ id: Number(id), title, content }))
      .unwrap()
      .then(() => {
        toast.success("Story updated successfully");
        navigate("/");
      })
      .catch(() => toast.error("Failed to update story"));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Story</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="input input-bordered"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="textarea textarea-bordered"
          required
        />
        <button type="submit" className="btn btn-primary">
          Update Story
        </button>
      </form>
    </div>
  );
};

export default EditStory;
