import { Router } from "express";
import { authenticateToken } from "../middleware/authenticate";
import {
  fetchStories,
  postStory,
  patchStory,
  removeStory,
  getMyStories,
} from "../controllers/storyController";

const router = Router();

router.get("/", fetchStories);
router.post("/", postStory);
router.patch("/:id", patchStory);
router.delete("/:id", removeStory);
router.get('/mine', getMyStories);

export default router;
