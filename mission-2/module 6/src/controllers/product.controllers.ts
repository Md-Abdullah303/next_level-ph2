import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "Product-1",
        price: 30,
      },
      {
        id: 2,
        name: "Product-2",
        price: 40,
      },
      {
        id: 3,
        name: "Product-3",
        price: 35,
      },
    ];

    productService();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        massage: "Products send successfully!",
        data: products,
      }),
    );
  }
};

export default productController;
