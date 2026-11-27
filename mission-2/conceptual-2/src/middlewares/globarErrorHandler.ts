import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode ?? 500;
  let message = err.message ?? "Internal Server Error";
  let errDetails = err;

  res.status(statusCode).json({
    success: false,
    message: message,
    data: errDetails,
  });
};

export default globalErrorHandler;
