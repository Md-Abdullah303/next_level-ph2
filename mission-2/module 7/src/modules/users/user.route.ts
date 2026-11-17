import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

export const userRouter = router;

router.post("/", UserController.createUser);
