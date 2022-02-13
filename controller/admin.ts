import { Request, Response } from "express";
import { PostAdmin, GetAdmin } from "../model/admin";
import * as adminData from "../data/admin";
import bcrypt from "bcrypt";
import "dotenv/config";

const BCRYPT_SALT_ROUNDS: number = Number(process.env.BCRYPT_SALT_ROUNDS);

export async function createAdmin(req: Request, res: Response) {
  const newAdminInfo: PostAdmin = req.body;
  const hashed = await bcrypt.hash(newAdminInfo.adpw, BCRYPT_SALT_ROUNDS);
  const insertId = await adminData.createAdmin({
    ...newAdminInfo,
    adpw: hashed,
  });
  res.status(201).json({ inserId: insertId });
}

export async function getAdmin(req: Request, res: Response) {
  const adminInfo: Array<GetAdmin> = await adminData.getAdmin();
  res.send(adminInfo);
}
