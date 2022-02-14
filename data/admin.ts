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
    "SELECT ta.adlvno, ta.adid, ta.adname, ta.email, ta.depart, tal.lvname, ta.duty FROM tb_admin AS ta, tb_admin_level AS tal WHERE ta.adlvno=tal.adlvno";
  return db.execute(query).then((result: any) => result[0]);
}

export async function login(adid: string): Promise<LoginAdmin> {
  const query: string =
    "SELECT ta.adid, ta.adname, ta.adpw, ta.depart, ta.duty, tal.lvname, tal.lvcode FROM tb_admin AS ta, tb_admin_level AS tal WHERE ta.adlvno=tal.adlvno AND ta.adid=?";
  return db.execute(query, [adid]).then((result: any) => result[0][0]);
}

export async function deleteAdmin(adidArray: Array<string>): Promise<void> {
  let pAdids: string = "";
  adidArray.map((val, inx) => {
    console.log(` inx===${inx}   length=====${adidArray.length}`);
    if (inx === adidArray.length - 1) {
      pAdids += `'${val}'`;
    } else {
      pAdids += `'${val}',`;
    }
  });
  const query: string = "DELETE FROM tb_admin WHERE adid in (" + pAdids + ")";

  console.log(query);
  db.execute(query);
}

export async function checkDupAdminId(checkAdminId: string): Promise<string> {
  const query: string = "SELECT adid FROM tb_admin WHERE adid = ?";
  return db.execute(query, [checkAdminId]).then((result: any) => result[0][0]);
}
