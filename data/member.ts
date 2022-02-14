import { db } from "./database";
import { Members } from "../model/member";

const membersCommonQuery =
  "SELECT tm.mbid, tml.mblvname, tm.mbname, tm.zip, tm.addr, tm.addr1, tm.total_point,tm.total_coupon,tm.mbstatus, tm.created FROM tb_member AS tm, tb_member_level AS tml WHERE tm.mblvcode=tml.mblvcode";

export async function getMembers(searchWord: string): Promise<Array<Members>> {
  const query: string = membersCommonQuery + searchWord;
  console.log(query);
  return db.execute(query).then((result: any) => result[0]);
}
