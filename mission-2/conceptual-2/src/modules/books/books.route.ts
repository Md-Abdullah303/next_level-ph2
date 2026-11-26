import { Router } from "express";
import { booksController } from "./books.controller";

const router = Router();

router.get("/", booksController.getAllBooks);
router.post("/", booksController.createBooks);
router.patch("/:id", booksController.updateBooks);
router.delete("/:id", booksController.deleteBooks);

export const booksRouter = router;
