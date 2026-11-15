import fs from "fs";
import path from "path";
import type { IProduct } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  //   console.log(filePath);
  // const result = fs.readFileSync(filePath.toString())
  const result = fs.readFileSync(filePath, "utf-8");
  //! utf-8 ki dekha lagbe
  //   console.log(result);
  return JSON.parse(result);
};

export const createProduct = (payload: IProduct) => {
  fs.writeFileSync(filePath, JSON.stringify(payload));
};
