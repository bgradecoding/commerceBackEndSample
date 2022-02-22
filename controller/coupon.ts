import { Request, Response } from "express";
import { Coupon } from "../model/coupon";
import * as couponData from "../data/coupon";

export async function getCouponList(req: Request, res: Response) {
  const couponInfo: Array<Coupon> = await couponData.getCouponList();
  res.status(200).json(couponInfo);
}

export async function getCoupon(req: Request, res: Response) {
  const couponId: string = req.params.id;
  const couponInfo: Coupon = await couponData.getCoupon(couponId);
  res.status(200).json(couponInfo);
}

export async function createCoupon(req: Request, res: Response) {
  const newCouponInfo: Partial<Coupon> = req.body.newCouponInfo;
  const insertId = await couponData.createCoupon(newCouponInfo);
  res.status(201).json({ inserId: insertId });
}
export async function updateCoupon(req: Request, res: Response) {
  const updateCouponInfo: Partial<Coupon> = req.body.updateCouponInfo;
  await couponData.updateCoupon(updateCouponInfo);
  res.sendStatus(200);
}

export async function deleteCoupon(req: Request, res: Response) {
  await couponData.deleteCoupon(req.body.couponId);
  res.sendStatus(204);
}
