import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from "../types/product";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  console.log(id);

  //? GET all products
  if (url === "/products" && method === "GET") {
    // const products = [
    //   {
    //     id: 1,
    //     name: "Product-1",
    //     price: 30,
    //   },
    //   {
    //     id: 2,
    //     name: "Product-2",
    //     price: 40,
    //   },
    //   {
    //     id: 3,
    //     name: "Product-3",
    //     price: 35,
    //   },
    // ];

    const products = productService();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        massage: "Products send successfully!",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: IProduct) => p.id == id);
    console.log(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        massage: "Product send successfully!",
        data: product,
      }),
    );
  }
};

export default productController;
