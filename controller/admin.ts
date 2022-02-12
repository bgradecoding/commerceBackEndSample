import { Request, Response } from "express";
import { PostAdmin, GetAdmin } from "../model/admin";
import * as adminData from "../data/admin";

export async function createAdmin(req: Request, res: Response) {
  const newAdminInfo: PostAdmin = req.body;
  const insertId = await adminData.createAdmin(newAdminInfo);
  res.sendStatus(201).json({ inserId: insertId });
}

export async function getAdmin(req: Request, res: Response) {
  const adminInfo: Array<GetAdmin> = await adminData.getAdmin();
  res.send(adminInfo);
}
