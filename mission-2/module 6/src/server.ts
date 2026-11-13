import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request", req);
    // console.log("Response", res);
    // console.log(req.url);
    // console.log(req.method);

    const url = req.url;
    const method = req.method;
    // console.log(url);

    if (url === "/favicon.ico") {
      return;
    } else if (url === "/" && method === "GET") {
      //   console.log("This is root route");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ massage: "The is the Root Route" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ massage: "The is the Products Route" }));
    } else {
      //   console.log("This route is note defined");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ massage: "This route is note defined" }));
    }

    // res.end("Hello from Node.js with TS server");
  },
);

server.listen(5000, () => {
  console.log("Server is running successfully!!");
});
