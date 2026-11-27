import express from "express";
import type { Request, Response } from "express";
import { authRouter } from "./modules/auth/auth.route";
import cors from "cors";
import { booksRouter } from "./modules/books/books.route";
import globalErrorHandler from "./middlewares/globarErrorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5000",
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/books", booksRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is Running! 🔥",
  });
});
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});
app.use(globalErrorHandler);

export default app;
