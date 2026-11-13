import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controllers";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/favicon.ico") {
    return;
  } else if (url === "/" && method === "GET") {
    //   console.log("This is root route");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ massage: "The is the Root Route" }));
  } else if (url?.startsWith("/products")) {
    // Product -> GET, PUT, PATCH, POST
    productController(req, res);
  } else {
    //   console.log("This route is note defined");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ massage: "This route is note defined" }));
  }
};

export default routeHandler;
