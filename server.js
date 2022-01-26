require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

app.use("/", authRouter);
app.use("/admin", adminRouter);


app.listen(8000);
