import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import * as util from "../util/util";

const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || "";

var router = express.Router();

//임시 서버 메모리 저장 리프레쉬 토큰
//TODO 리프레쉬 토큰 DB저장으로 바꿔야함
let refreshTokens: Array<string> = [];

router.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    const accesToken = util.generateToken({ adid: "" });
    res.json(accesToken);
  });
});

router.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

//router.post("/login", async (req, res) => {
//  try {
//    const result = await authModel.loginAdmin(
//      req.body.userid,
//      req.body.password
//    );

//    if (result) {
//      const user = { name: result.ADID };

//      const accesToken = util.generateToken(user);

//      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

//      refreshTokens.push(refreshToken);

//      res.json({ accessToken: accesToken, refreshToken: refreshToken });
//    } else {
//      res.sendStatus(401);
//    }
//  } catch (err) {
//    console.log(err);
//    res.sendStatus(500);
//  }
//});

export default router;
