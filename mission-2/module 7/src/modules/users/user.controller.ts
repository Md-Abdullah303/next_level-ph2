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

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();

    res.status(200).json({
      success: true,
      massage: "User retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error?.massage,
      data: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserFromDB(id as string);

    res.status(200).json({
      success: true,
      massage: "Successfully Retrieved User Data!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      massage: error?.massage,
      data: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.updateUserIntoDB(id as string, req.body);
    res.status(200).json({
      success: true,
      massage: "User Updated Successfully!",
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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await UserService.deleteUserFromDB(id as string);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        massage: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        massage: "User Deleted Successfully!",
        // data: error,
      });
    }
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
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
