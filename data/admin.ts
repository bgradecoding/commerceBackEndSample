import { db } from "./database";
import { PostAdmin, GetAdmin, LoginAdmin } from "../model/admin";

export async function createAdmin(newAdminInfo: PostAdmin): Promise<string> {
  const {
    adlvno,
    adid,
    adpw,
    adname,
    adress,
    findpass_que,
    findpass_ans,
    email,
    tel,
    depart,
    duty,
  } = newAdminInfo;

  const query: string =
    "INSERT INTO tb_admin VALUES(2,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())";
  return db
    .execute(query, [
      adlvno,
      adid,
      adpw,
      adname,
      adress,
      findpass_que,
      findpass_ans,
      email,
      tel,
      depart,
      duty,
    ])
    .then((result: any) => result[0].insertId);
}

export async function getAdmin(): Promise<Array<GetAdmin>> {
  const query: string =
    "SELECT ta.adlvno, ta.adid, ta.adname, ta.email, ta.depart, tal.lvname, ta.duty from tb_admin as ta, tb_admin_level as tal where ta.adlvno=tal.adlvno";
  return db.execute(query).then((result: any) => result[0]);
}

export async function login(adid: string): Promise<LoginAdmin> {
  const query: string =
    "SELECT ta.adid, ta.adname, ta.adpw, ta.depart, ta.duty, tal.lvname, tal.lvcode from tb_admin as ta, tb_admin_level as tal where ta.adlvno=tal.adlvno and ta.adid=?";
  return db.execute(query, [adid]).then((result: any) => result[0][0]);
}
