import { db } from "./database";
import { PostAdmin, GetAdmin } from "../model/admin";

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
    "INSERT INTO tb_admin VALUES(null,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())";
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
    "SELECT ta.adlvno, ta.adid, ta.adname, ta.email, ta.depart, tal.lvname from tb_admin as ta, tb_admin_level as tal where ta.adlvno=tal.adlvno";
  return db.execute(query).then((result: any) => result[0]);
}
