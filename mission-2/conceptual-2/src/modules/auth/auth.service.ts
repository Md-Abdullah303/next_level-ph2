import { pool } from "../../config/db";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { hashPasswordHelpers } from "../../utils/passwordHelpers";

const registerIntoDB = async (payload: any) => {
  const { name, email, password, role } = payload;

  const hashPassword = await hashPasswordHelpers.hashPassword(password);

  const result = await pool.query(
    `INSERT INTO users(name, email,password, role) 
      VALUES($1,$2,$3,$4) RETURNING *`,
    [name, email, hashPassword, role],
  );

  return result;
};

const loginIntoDB = async (email: string, password: string) => {
  const isUserExists = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  const user = isUserExists.rows[0];

  if (!user || !hashPasswordHelpers.comparePassword(password, user.password)) {
    const error = new Error("Invalid Email or Password!");
    return error;
  }

  const token = jwtHelpers.generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
    is_active: user.is_active,
  });
  // console.log("token:", token);

  return { user, token };
};

export const authService = {
  registerIntoDB,
  loginIntoDB,
};
