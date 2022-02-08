import express from "express";
import authRouter from "./routes/auth";
import adminRouter from "./routes/admin";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRouter);
app.use("/admin", adminRouter);

app.listen(8000, () => {
  console.log("**----------------------------------**");
  console.log("====       Server is On...!!!     ====");
  console.log("**----------------------------------**");
});
