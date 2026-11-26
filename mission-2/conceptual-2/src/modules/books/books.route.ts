import { Router } from "express";
import { booksController } from "./books.controller";

const router = Router();

router.get("/", booksController.getAllBooks);
router.post("/", booksController.createBooks);
router.put("/", booksController.updateBooks);
router.delete("/", booksController.deleteBooks);

export const booksRouter = router;
