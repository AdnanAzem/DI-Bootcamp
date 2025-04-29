import { Request, Response } from "express";
import {
  addContributor,
  getContributorsByStory,
  removeContributor,
} from "../models/contributorModel";

export const createContributor = async (req: Request, res: Response) => {
  const { story_id, user_id } = req.body;
  if (!story_id || !user_id) {
    res.status(400).json({ message: "story_id and user_id are required." });
    return;
  }
  try {
    const contributor = await addContributor(story_id, user_id);
    res.status(201).json(contributor);
  } catch (err) {
    res.status(500).json({ message: "Error adding contributor." });
  }
};

export const getContributors = async (req: Request, res: Response) => {
  const { story_id } = req.params;
  try {
    const contributors = await getContributorsByStory(Number(story_id));
    res.json(contributors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contributors." });
  }
};

export const deleteContributor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await removeContributor(Number(id));
    res.status(200).json({ message: "Contributor removed." });
  } catch (err) {
    res.status(500).json({ message: "Error removing contributor." });
  }
};
