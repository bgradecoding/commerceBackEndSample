import express, { Request, Response, NextFunction } from "express";
import * as couponController from "../controller/coupon";
import * as util from "../util/util";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  util.authenticateToken(req, res, next);
});

router.get("/coupon", couponController.getCouponList);
router.get("/coupon/:id", couponController.getCoupon);
router.post("/coupon", couponController.createCoupon);
router.delete("/coupon", couponController.deleteCoupon);
router.put("/coupon", couponController.updateCoupon);

export default router;
