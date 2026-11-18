import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

export const authRouter = router;

// /api/v1/auth/login
router.post("/login", authController.loginUser);
