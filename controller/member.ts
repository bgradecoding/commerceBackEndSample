import { Request, Response } from "express";
import { Members } from "../model/member";
import * as memberData from "../data/member";

export async function getMembers(req: Request, res: Response) {
  let searchWord: string = "";
  if (req.query.mbid) {
    searchWord = " AND mbid='" + req.query.mbid + "'";
  } else if (req.query.mbname) {
    searchWord = " AND mbname='" + req.query.mbname + "'";
  } else if (req.query.mblvname) {
    searchWord = " AND mblvname='" + req.query.mblvname + "'";
  }
  const membersInfo: Array<Members> = await memberData.getMembers(searchWord);

  res.status(200).json(membersInfo);
}

//추후 필요하면 구현
export async function getMemberDetail(req: Request, res: Response) {}

export async function updateMemberInfo(req: Request, res: Response) {}