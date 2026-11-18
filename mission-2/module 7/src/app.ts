import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRouter } from "./modules/users/user.route";
import { profileRouter } from "./modules/profile/profile.route";
const app: Application = express();

//* middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/profiles", profileRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    massage: "This is root route",
    author: "PH",
  });
});

export default app;
