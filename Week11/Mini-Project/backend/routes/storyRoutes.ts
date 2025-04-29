import { Router } from "express";
import { authenticateToken } from "../middleware/authenticate";
import {
  fetchStories,
  postStory,
  patchStory,
  removeStory,
} from "../controllers/storyController";

const router = Router();

router.get("/", fetchStories);
router.post("/", postStory);
router.patch("/:id", patchStory);
router.delete("/:id", removeStory);

export default router;
