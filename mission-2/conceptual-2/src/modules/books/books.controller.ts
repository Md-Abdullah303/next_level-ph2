import type { Request, RequestHandler, Response } from "express";
import { booksService } from "./books.service";

const createBooks: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await booksService.createBooksIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "Book was Created.",
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
const getAllBooks: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await booksService.getAllBooksFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully!",
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
const updateBooks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await booksService.updatedBooksIntoDB(
      id as string,
      req.body,
    );
    // console.log(result, id);
    res.status(200).json({
      success: true,
      message: "Book was Updated.",
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
const deleteBooks = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Book was Created.",
      //   data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: error,
    });
  }
};

export const booksController = {
  createBooks,
  getAllBooks,
  updateBooks,
  deleteBooks,
};
