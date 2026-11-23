import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      success: true,
      data: "Hello World!",
    }),
  );
});

server.listen(5000, () => {
  console.log("Server is Running on port : 5000");
});
