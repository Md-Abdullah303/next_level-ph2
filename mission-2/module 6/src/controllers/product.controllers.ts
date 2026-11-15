import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utlis/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
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
    // console.log(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        massage: "Product send successfully!",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    const body = await bodyParser(req);
    const newProduct = {
      id: Date.now(),
      ...body,
    };

    const products = productService();
    products.push(newProduct);

    createProduct(products);

    console.log(newProduct);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        massage: "Product created successfully!",
        data: newProduct,
      }),
    );
  }
};

export default productController;
