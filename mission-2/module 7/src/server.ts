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
    "postgresql://neondb_owner:npg_mGnLys4CfT8A@ep-cool-sun-ao162iyl-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=false&channel_binding=require",
});
// console.log(pool);

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      age INT,
      is_Active BOOLEAN DEFAULT true,

      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
             
      `);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};

initDB();

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
