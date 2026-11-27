import Request from "express";
import { JwtPayload } from "jsonwebtoken";
export {};

declare global {
  interface Error {
    statusCode: number;
  }

  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
