import { Request, Response } from "express";
import {
  getAllStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
  isContributor,
  getStoriesByUser,
} from "../models/storyModel";
import { log } from "console";

export const fetchStories = async (req: Request, res: Response) => {
  try {
    const stories = await getAllStories();

    res.json(stories);
  } catch {
    res.status(500).json({ message: "Failed to fetch stories." });
  }
};

export const postStory = async (req: any, res: Response) => {
  const { title, content } = req.body;
  const user = req.user;

  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required." });
    return;
  }

  try {
    const story = await createStory(title, content, user.userId);
    res.status(201).json(story);
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Failed to create story." });
  }
};

export const patchStory = async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const user = req.user;

  try {
    const story = await getStoryById(Number(id));
    if (!story) {
      res.status(404).json({ message: "Story not found." });
      return;
    }
    const isAuthor = story.author_id === user.userId;
    const contributor = await isContributor(Number(id), user.userId);

    if (!isAuthor && !contributor) {
      {
        res.status(403).json({ message: "Not authorized to edit this story." });
      }
    }

    const updated = await updateStory(Number(id), title, content);
    res.json(updated);
  } catch {
    res.status(500).json({ message: "Failed to update story." });
  }
};

export const removeStory = async (req: any, res: Response) => {
  const { id } = req.params;
  const user = req.user;

  try {
    const story = await getStoryById(Number(id));
    if (!story) {
      res.status(404).json({ message: "Story not found." });
      return;
    }

    if (story.author_id !== user.userId) {
      {
        res
          .status(403)
          .json({ message: "Only the author can delete the story." });
        return;
      }
    }

    await deleteStory(Number(id));
    res.json({ message: "Story deleted successfully." });
  } catch {
    res.status(500).json({ message: "Failed to delete story." });
  }
};

export const getMyStories = async (req: any, res: Response) => {
    try {
      const userId = req.user.userId;
      const stories = await getStoriesByUser(userId);
      res.json(stories);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};
