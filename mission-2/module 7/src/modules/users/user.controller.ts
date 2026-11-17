import type { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUserIntoDB(req.body);

    res.status(201).json({
      success: true,
      massage: "User Created!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error?.massage,
      data: error,
    });
  }
};

export const UserController = {
  createUser,
};
