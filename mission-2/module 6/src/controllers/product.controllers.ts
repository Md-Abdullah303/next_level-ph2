import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utlis/parseBody";
import { sendResponse } from "../utlis/sendResponse";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  console.log(id);

  //? GET all products
  if (url === "/products" && method === "GET") {
    try {
      const products = productService();
      sendResponse(res, true, 200, "Products retrived successfully!", products);
    } catch (error) {
      sendResponse(res, false, 500, "Invalid request");
    }
  } //? Get one product
  else if (method === "GET" && id !== null) {
    try {
      const products = productService();
      const product = products.find((p: IProduct) => p.id == id);
      if (!product) {
        sendResponse(res, false, 404, "Product not found");
      }
      sendResponse(res, true, 200, "Product send successfully!", product);
    } catch (error) {
      sendResponse(res, false, 500, "Invalid request");
    }
  } //? Post one product
  else if (method === "POST" && url === "/products") {
    try {
      const body = await bodyParser(req);
      const newProduct = {
        id: Date.now(),
        ...body,
      };

      const products = productService();
      products.push(newProduct);

      createProduct(products);

      console.log(newProduct);
      sendResponse(res, true, 201, "Product created successfully!", newProduct);
    } catch (error) {
      sendResponse(res, false, 500, "Invalid Server!");
    }
  } //? Update one product
  else if (method === "PUT" && id !== null) {
    try {
      const body = await bodyParser(req);
      const products = productService();

      const index = products.findIndex((p: IProduct) => p.id === id);
      console.log(index);

      if (index < 0) {
        sendResponse(res, false, 404, "Product not found");
      }

      products[index] = { id: products[index].id, ...body };

      createProduct(products);

      sendResponse(
        res,
        true,
        200,
        "Product updated successfully!",
        products[index],
      );
    } catch (error) {
      sendResponse(res, false, 500, "Invalid Server!");
    }
  } //? Delete one product
  else if (method === "DELETE" && id !== null) {
    try {
      const products = productService();
      const index = products.findIndex((p: IProduct) => p.id === id);

      if (index < 0) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            massage: "Product not found",
          }),
        );
      }

      products.splice(index, 1);
      createProduct(products);

      sendResponse(res, true, 200, "Product deleted successfully!");
    } catch (error) {
      sendResponse(res, false, 500, "Invalid Server!");
    }
  }
};

export default productController;
