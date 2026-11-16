import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 5000;

//* meddelware
app.use(express.json());

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_mGnLys4CfT8A@ep-cool-sun-ao162iyl-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
console.log(pool);

app.get("/", (req: Request, res: Response) => {
  //   res.send("Hello World!");
  // console.log(res);
  res.status(200).json({
    success: true,
    massage: "This is root route",
    author: "PH",
  });
});

app.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  const { name, roll, password } = req.body;

  res.status(200).json({
    success: true,
    massage: "This is test API!",
    body: { name, roll },
  });
});

app.listen(port, () => {
  console.log(`This is root route: ${port}`);
});
