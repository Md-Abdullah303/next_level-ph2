import app from "./app";

const PORT = 5000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is Running on PORT:", PORT);
    });
  } catch (error) {
    console.log("Some thing was wrong!", error);
  }
};

startServer();
