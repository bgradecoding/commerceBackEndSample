import express, { Request, Response, NextFunction } from "express";
import * as memberController from "../controller/member";
import * as util from "../util/util";

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  util.authenticateToken(req, res, next);
});

router.get("/members", memberController.getMembers);

//router.get("/member", memberController.getMemberDetail);

router.put("/member", memberController.updateMemberInfo);

router.post("/level", memberController.createLevel);
router.put("/level", memberController.updateLevel);
router.delete("/level", memberController.deleteLevel);

export default router;
