import { pool } from "../../db";
import type { IUser, UpdatedUser } from "./user.interface";

const createUserIntoDB = async (payload: IUser) => {
  // console.log(req.body);
  const { name, email, password, age } = payload;

  const result = await pool.query(
    `
    INSERT INTO users (name, email, password, age)
    VALUES ($1,$2,$3,$4) RETURNING *
      `,
    [name, email, password, age],
  );

  return result;
};

const getAllUserFromDB = async () => {
  const result = await pool.query(`
      SELECT * FROM users
      `);
  return result;
};

const getUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users
      WHERE id = $1
      `,
    [id],
  );
  return result;
  // console.log(result);
};

const updateUserIntoDB = async (id: string, payload: UpdatedUser) => {
  const { name, password, age, is_Active } = payload;

  const result = await pool.query(
    `
      UPDATE users 
      SET
      name = COALESCE($1, name),
      password = COALESCE($2, password),
      age = COALESCE($3, age),
      is_Active = COALESCE($4, is_Active),
      updated_at = NOW()

      WHERE id=$5 RETURNING *
      `,
    [name ?? null, password ?? null, age ?? null, is_Active ?? null, id],
  );

  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await pool.query(
    `
      DELETE FROM users
      WHERE id=$1
      `,
    [id],
  );

  return result;
};

export const UserService = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
