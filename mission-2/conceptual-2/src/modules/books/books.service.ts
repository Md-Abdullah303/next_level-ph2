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
const updatedBooksIntoDB = async (id: string, payload: Partial<IBook>) => {
  const { title, description, author, isbn, total_copies, available_copies } =
    payload;

  const result = await pool.query(
    `
        UPDATE books
        SET title = COALESCE($1, title),
            description = COALESCE($2, description),
            author = COALESCE($3, author),
            isbn = COALESCE($4, isbn),
            total_copies = COALESCE($5, total_copies),
            available_copies = COALESCE($6, available_copies)

        WHERE id=$7 RETURNING *
        `,
    [
      title ?? null,
      description ?? null,
      author ?? null,
      isbn ?? null,
      total_copies ?? null,
      available_copies ?? null,
      id,
    ],
  );

  return result.rows[0];
};
const getAllBooksFromDB = async (query: any) => {
  const { search } = query;
  let sql = `SELECT * FROM books`;
  let params: any[] = [];

  if (search) {
    sql = `SELECT * FROM books WHERE title ILIKE $1 OR description ILIKE $1`;
    params = [`%${search}%`];
  }

  const result = await pool.query(sql, params);

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
