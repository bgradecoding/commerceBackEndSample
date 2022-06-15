import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";
import * as authData from "../data/admin";
import { LoginAdmin, JwtAdmin } from "../model/admin";
import * as util from "../util/util";

const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || "";

//임시 서버 메모리 저장 리프레쉬 토큰
//TODO 리프레쉬 토큰 DB저장으로 바꿔야함
let refreshTokens: Array<string> = [];

export async function login(req: Request, res: Response) {
  const { adid, adpw } = req.body;

  const adminUser: LoginAdmin = await authData.login(adid);
  if (!adminUser) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const isValidPassword = await bcrypt.compare(adpw, adminUser.adpw);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const jwtTokenObject: JwtAdmin = {
    adid: adminUser.adid,
    lvcode: adminUser.lvcode,
  };
  const accesToken = util.generateToken(jwtTokenObject);
  const refreshToken = jwt.sign(jwtTokenObject, REFRESH_TOKEN_SECRET);

  //TODO : RefreshToken DB에 저장하는 로직 필요
  refreshTokens.push(refreshToken);
  res.status(200).json({ ...adminUser, adpw: "", accesToken, refreshToken });
}

export function logout(req: Request, res: Response) {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.status(204).json({ message: "Logout success" });
}

export function tokenValidator(req: Request, res: Response) {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    const accesToken = util.generateToken(user);
    res.json(accesToken);
  });
}
