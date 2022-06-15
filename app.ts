import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import adminRouter from "./routes/admin";
import memberRouter from "./routes/member";
import couponRouter from "./routes/coupon";
import cateRouter from "./routes/cate";
import helmet from "helmet";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use("/", authRouter);
app.use("/admin", adminRouter);
app.use("/member", memberRouter);
app.use("/coupon", couponRouter);
app.use("/cate", cateRouter);

app.use((error: any, req: Request, res: Response) => {
  res.json("Error");
});

app.listen(8000, () => {
  console.log("**----------------------------------**");
  console.log("====      Server is On...!!!      ====");
  console.log("**----------------------------------**");
});
