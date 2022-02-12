import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as authModel from "../data/admin";

export async function login(req: Request, res: Response) {
  const { adminId, adminPw } = req.body;
  const adminUser: string | undefined = await authModel.createAdmin();
}
