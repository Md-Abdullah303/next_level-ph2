import type { IBook } from "./books.interface";
import { pool } from "../../config/db";

const createBooksIntoDB = async (payload: IBook) => {
  const { title, description, author, isbn, total_copies, available_copies } =
    payload;
  //   console.log(payload);

  const result = await pool.query(
    `
        INSERT INTO books (title, description,author, isbn, total_copies, available_copies)
        VALUES ($1,$2,$3,$4,$5,$6) RETURNING *
        `,
    [title, description, author, isbn, total_copies, available_copies],
  );

  return result.rows[0];
};
const updatedBooksIntoDB = () => {
  return;
};
const getAllBooksFromDB = async () => {
  const result = await pool.query(`
        SELECT * FROM books 
        `);

  return result.rows;
};
const deleteBooksIntoDB = () => {
  return;
};

export const booksService = {
  createBooksIntoDB,
  updatedBooksIntoDB,
  getAllBooksFromDB,
  deleteBooksIntoDB,
};
