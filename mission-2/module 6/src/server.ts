import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";
import routeHandler from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    /**console.log("Request", req);
    console.log("Response", res);
    console.log(req.url);
    console.log(req.method);
    res.end("Hello from Node.js with TS server"); */
    routeHandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Server is running on the port ${config.port}!`);
});
