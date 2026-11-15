import type { IncomingMessage } from "http";

export const bodyParser = (req: IncomingMessage): Promise<any> => {
  let body = "";
  return new Promise((resole, reject) => {
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resole(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
};
