import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import adminRouter from "./routes/admin";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/", authRouter);
app.use("/admin", adminRouter);

app.use((error: any, req: Request, res: Response) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8000, () => {
  console.log("**----------------------------------**");
  console.log("====      Server is On...!!!      ====");
  console.log("**----------------------------------**");
});
