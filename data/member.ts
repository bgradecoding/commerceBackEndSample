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

export async function createLevel(levelInfo: Level) {}

export async function updateLevel(levelInfo: Level) {}

export async function deleteLevel(levelCode: string) {}
