import app from "./app";
import config from "./config";
import { pool } from "./config/db";
import { initDB } from "./config/initDb";

const startServer = async () => {
  try {
    initDB();
    // console.log(`DB connected on ${time.rows[0].now}`);
    app.listen(config.port, () => {
      console.log("Server is Running on PORT:", config.port);
    });
  } catch (error) {
    console.log("Some thing was wrong!", error);
  }
};

startServer();
