import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();
const port = 5000;

//* meddelware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  console.log(res);
  res.status(200).json({
    success: true,
    massage: "This is root route",
    author: "PH",
  });
});

app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`This is root route: ${port}`);
});
