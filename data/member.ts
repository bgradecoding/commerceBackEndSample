import { db } from "./database";
import { Level, Members } from "../model/member";

const membersCommonQuery =
  "SELECT tm.mbid, tml.mblvname, tm.mbname, tm.zip, tm.addr, tm.addr1, tm.total_point,tm.total_coupon,tm.mbstatus, tm.created FROM tb_member AS tm, tb_member_level AS tml WHERE tm.mblvcode=tml.mblvcode";

export async function getMembers(searchWord: string): Promise<Array<Members>> {
  const query: string = membersCommonQuery + searchWord;
  return db.execute(query).then((result: any) => result[0]);
}

export async function updateMemberInfo(mbidArray: Array<string>) {
  let pMbids: string = "";
  mbidArray.map((val, inx) => {
    if (inx === mbidArray.length - 1) {
      pMbids += `'${val}'`;
    } else {
      pMbids += `'${val}',`;
    }
  });
  const query: string =
    "UPDATE tb_member SET mbstatus = '승인' WHERE mbid in (" + pMbids + ")";
  db.execute(query);
}

export async function createLevel(levelInfo: Level) {
  const { mblvcode, mblvname, remark, discount, buy_point, post_point } =
    levelInfo;
  const query: string =
    "INSERT INTO tb_member_level VALUES (null,?,?,?,?,?,?,NOW(),NOW())";
  return db
    .execute(query, [
      mblvcode,
      mblvname,
      remark,
      discount,
      buy_point,
      post_point,
    ])
    .then((result: any) => result[0].insertId);
}

export async function updateLevel(levelInfo: Partial<Level>) {
  const { mblvcode, mblvname, remark, discount, buy_point, post_point } =
    levelInfo;
  const query: string =
    "UPDATE tb_member_level SET mblvname=?,remark=?,discount=?, buy_point=?, post_point=?, updated=NOW() WHERE mblvcode=?";
  return db.execute(query, [
    mblvname,
    remark,
    discount,
    buy_point,
    post_point,
    mblvcode,
  ]);
}

export async function deleteLevel(levelCode: string) {
  const query: string = "DELETE FROM tb_member_level WHERE mblvcode=?";
  db.execute(query, [levelCode]);
}
