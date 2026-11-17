import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

export const userRouter = router;

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
