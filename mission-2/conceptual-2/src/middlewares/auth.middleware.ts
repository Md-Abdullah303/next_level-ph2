import type { NextFunction, Request, RequestHandler, Response } from "express";
import { jwtHelpers } from "../utils/jwtHelpers";
import type { JwtPayload } from "jsonwebtoken";

const verifyToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    throw new Error("Access Denied! Token not found!");
  }

  try {
    const decoded = jwtHelpers.verifyToken(authHeader);

    req.user = decoded as JwtPayload;
  } catch (error) {
    throw new Error("Invalid or Expired token.");
  }

  next();
};

const authorizedRoles = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      const error = new Error("Forbidden: You don't have access!");
      error.statusCode = 403;
      throw error;
    }
    next();
  };
};

export const authMiddleware = { verifyToken, authorizedRoles };
