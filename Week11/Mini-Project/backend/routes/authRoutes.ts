import express from "express";
import { register, login, refreshToken, logout, getUsers } from "../controllers/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/refresh", refreshToken);
router.get("/users", getUsers);

export default router;
