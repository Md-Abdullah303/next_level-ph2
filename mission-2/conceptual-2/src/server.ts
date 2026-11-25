import app from "./app";
import config from "./config";

const startServer = () => {
  try {
    app.listen(config.port, () => {
      console.log("Server is Running on PORT:", config.port);
    });
  } catch (error) {
    console.log("Some thing was wrong!", error);
  }
};

startServer();
