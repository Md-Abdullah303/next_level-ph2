import { hashPasswordHelpers } from "../../utils/passwordHelpers";
import { pool } from "../../config/db";
import e, { type RequestHandler, type Request, type Response } from "express";
import { authService } from "./auth.service";

const register = async (req: Request, res: Response) => {
  try {
    const result = await authService.registerIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "Successfully Login!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: error,
    });
  }
};

const login: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await authService.loginIntoDB(email, password);

    res.status(200).json({
      success: true,
      message: "Successfully Login",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: error,
    });
  }
};

export const authController = {
  register,
  login,
};
