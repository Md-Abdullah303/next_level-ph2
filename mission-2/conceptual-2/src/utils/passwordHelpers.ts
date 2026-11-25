import bcrypt from "bcryptjs";

const hashPassword = async (planPassword: string) => {
  return await bcrypt.hash(planPassword, 10);
};

const comparePassword = async (planPassword: string, hashPassword: string) => {
  return await bcrypt.compare(planPassword, hashPassword);
};

export const hashPasswordHelpers = {
  hashPassword,
  comparePassword,
};
