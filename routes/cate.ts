import express, { Request, Response, NextFunction } from "express";
import * as couponController from "../controller/coupon";
import * as util from "../util/util";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  util.authenticateToken(req, res, next);
});

router.get("/cate", couponController.getCouponList);
router.get("/cate/:id", couponController.getCoupon);
router.post("/cate", couponController.createCoupon);
router.delete("/cate", couponController.deleteCoupon);
router.put("/cate", couponController.updateCoupon);

export default router;
