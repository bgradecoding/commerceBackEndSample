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
  res.json(adminInfo);
}

export async function deleteAdmin(req: Request, res: Response) {
  await adminData.deleteAdmin(req.body.adidArray);
  res.sendStatus(204);
}

export async function checkDupAdminId(req: Request, res: Response) {
  const checkAdminId = req.params.adid;
  console.log(checkAdminId);
  const resultId = await adminData.checkDupAdminId(checkAdminId);
  console.log(resultId);
  if (resultId) {
    return res.status(409).json({ message: `${checkAdminId} already exists` });
  }
  res.status(200).json({ message: `${checkAdminId} is vailable` });
}
