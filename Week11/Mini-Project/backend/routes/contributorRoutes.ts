import express from "express";
import {
  createContributor,
  getContributors,
  deleteContributor,
} from "../controllers/contributorController";
import { authenticateToken } from "../middleware/authenticate";

const router = express.Router();

router.post("/", authenticateToken, createContributor);
router.get("/:story_id", authenticateToken, getContributors);
router.delete("/:id", authenticateToken, deleteContributor);

export default router;
