import { Router } from "express";
import { booksController } from "./books.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
  "/",
  authMiddleware.verifyToken,
  authMiddleware.authorizedRoles("member", "admin"),
  booksController.getAllBooks,
);
router.post("/", booksController.createBooks);
router.patch("/:id", booksController.updateBooks);
router.delete("/:id", booksController.deleteBooks);

export const booksRouter = router;
