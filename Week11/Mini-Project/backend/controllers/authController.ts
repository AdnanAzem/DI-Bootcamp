import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/db";

const authModel = require("../models/authModel");

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }
  try {
    const user = await authModel.createUser(username, email, password);

    res.status(201).json({ message: "User registered successfully.", user });
    return;
  } catch (err) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authModel.getUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials." });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, username: user.username },
      JWT_SECRET!,
      {
        expiresIn: "15m",
      }
    );
    const REFRESH_SECRET = process.env.REFRESH_SECRET;
    const refreshToken = jwt.sign(
      { userId: user.id, email: user.email, username: user.username },
      REFRESH_SECRET!,
      { expiresIn: "7d" }
    );

    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 900000 }); 
    res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 604800000 });
    res.json({ accessToken });
    return;
  } catch (err) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("refreshToken");
  req.cookies.refreshToken = null;
  delete req.cookies.refreshToken;
  res.sendStatus(200);
}

export const refreshToken = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    res.sendStatus(403);
    return;
  }

  jwt.verify(token, process.env.REFRESH_SECRET!, (err: any, user: any) => {
    if (err) {
      res.sendStatus(403);
      return;
    }
    const newAccessToken = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );
    res.json({ accessToken: newAccessToken });
  });
};
