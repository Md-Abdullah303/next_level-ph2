import http from "node:http";
import fs from "node:fs/promises";
import path, { resolve } from "node:path";

const DB_PATH = path.join(process.cwd(), "book.json");

const server = http.createServer(async (req, res) => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  const parseDate = JSON.parse(data);

  const method = req.method;
  const url = req.url;

  // GET BOOK
  if (method === "GET" && url === "/books") {
    res.writeHead(200, "application/json");
    res.end(JSON.stringify({ data: parseDate }));
  }
  //? now post method use kore kemne ki korte hobe oi part dekho
  if (method === "POST" && url === "/books") {
    let body = "";
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        Promise.resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        Promise.reject(new Error("Invalid Error!"));
      }
    });
    console.log({ body });
  }
});

server.listen(5000, () => {
  console.log("Server is Running on port : 5000");
});
