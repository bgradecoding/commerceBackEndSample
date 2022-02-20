import { db } from "./database";

export async function getCoupon() {
  const query: string = "";
  return db.execute(query).then((result: any) => result[0]);
}

export async function createCoupon() {
  const query: string = "";
  return db.execute(query).then((result: any) => result[0]);
}

export async function deleteCoupon() {
  const query: string = "";
  return db.execute(query).then((result: any) => result[0]);
}

export async function updateCoupon() {
  const query: string = "";
  return db.execute(query).then((result: any) => result[0]);
}
