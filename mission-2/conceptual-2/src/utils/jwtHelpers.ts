import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";

const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, config.jwt_secret, {
    expiresIn: "1d",
  });
};

const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwt_secret);
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
