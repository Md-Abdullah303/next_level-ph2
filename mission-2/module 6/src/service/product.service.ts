import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  //   console.log(filePath);
  const result = fs.readFileSync(filePath, "utf-8");
  //! utf-8 ki dekha lagbe
  //   console.log(result);
  return JSON.parse(result);
};
