import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { refreshToken } from "../controllers/authController";

export const authenticateToken = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  
  const token =  req.cookies.refreshToken;
//   console.log('refresh token: ',req.cookies.refreshToken);
//   console.log('auth header: ',authHeader.split(" ")[1]);
  
  
//   (authHeader && authHeader.split(" ")[1]) ||

  if (!token) {
    res.status(401).json({ message: "Unauthorized user" });
    return;
  }
  const JWT_SECRET = process.env.REFRESH_SECRET;
  
  
  jwt.verify(token, JWT_SECRET!, (err: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
    if (err) {
        console.log(err);
        
      res.status(403).json({ message: "Forbidden user" });
      return;
    }
    req.user = decoded;
    next();
  });
};
