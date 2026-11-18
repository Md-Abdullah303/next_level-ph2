import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt from "jsonwebtoken";

const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
}) => {
  // check if the user exists -> Done
  // check if the password match -> Done
  // check the user status -> Done
  // If pass all then generate token -> Done

  const { email, password } = payload;
  const user = await pool.query(
    `
    SELECT * FROM users WHERE email=$1
    `,
    [email],
  );

  if (user.rowCount === 0) {
    throw new Error("Invalid Credentials!! userData");
  }

  const mathPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!mathPassword) {
    throw new Error("Invalid Credentials!! password");
  }

  if (!user.rows[0].is_active) {
    throw new Error("Invalid Credentials!! active");
  }

  const jwtPayload = {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email,
  };

  const accessToken = await jwt.sign(
    jwtPayload,
    "fasdfasdfasdfasdfasdfsdfadsfadsfadsa",
    {
      expiresIn: "1d",
    },
  );

  return { accessToken, user: user.rows[0] };
};

export const authService = {
  loginUserIntoDB,
};
