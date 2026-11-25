import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is Running! 🔥",
  });
});

export default app;
