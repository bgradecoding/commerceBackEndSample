import { db } from "./database";
import { Coupon } from "../model/coupon";

export async function getCouponList(): Promise<Array<Coupon>> {
  const query: string = "SELECT * FROM tb_coupon";
  return db.execute(query).then((result: any) => result[0]);
}

export async function getCoupon(couponId: string): Promise<Coupon> {
  const query: string = "SELECT * FROM tb_coupon WHERE coupon_number = ?";
  return db.execute(query, [couponId]).then((result: any) => result[0][0]);
}

export async function createCoupon(
  newCouponInfo: Partial<Coupon>
): Promise<string> {
  const {
    gdno,
    gname,
    coup_name,
    coup_type,
    order_amount,
    coupon_number,
    pay_type,
    disc_type,
    disc_price,
    disc_rate,
    limit_price,
    limit_amount,
    dead_type,
    dead_term,
    distdate_start,
    distdate_end,
    state,
  } = newCouponInfo;
  const query: string =
    "INSERT INTO tb_coupon VALUES (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())";
  return db
    .execute(query, [
      gdno,
      gname,
      coup_name,
      coup_type,
      order_amount,
      coupon_number,
      pay_type,
      disc_type,
      disc_price,
      disc_rate,
      limit_price,
      limit_amount,
      dead_type,
      dead_term,
      distdate_start,
      distdate_end,
      state,
    ])
    .then((result: any) => result[0].insertId);
}

export async function deleteCoupon(couponId: string) {
  const query: string = "DELETE FROM tb_coupon WHERE coupon_number=?";
  return db.execute(query, [couponId]);
}

export async function updateCoupon(updateCouponInfo: Partial<Coupon>) {
  const {
    coup_name,
    coup_type,
    gdno,
    gname,
    pay_type,
    disc_type,
    disc_price,
    disc_rate,
    limit_price,
    limit_amount,
    dead_type,
    dead_term,
    distdate_start,
    distdate_end,
    state,
    coupon_number,
  } = updateCouponInfo;
  const query: string =
    "UPDATE tb_coupon SET coup_name=?, coup_type=?,gdno=?,gname=?,pay_type=?,disc_type=?,disc_price=?,disc_rate=?,limit_price=?,limit_amount=?,dead_type=?,dead_term=?,distdate_start=?,distdate_end=? WHERE coupon_number=?";
  return db.execute(query, [
    coup_name,
    coup_type,
    gdno,
    gname,
    pay_type,
    disc_type,
    disc_price,
    disc_rate,
    limit_price,
    limit_amount,
    dead_type,
    dead_term,
    distdate_start,
    distdate_end,
    state,
    coupon_number,
  ]);
}
