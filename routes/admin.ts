import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import * as adminController from "../controller/admin";
import * as util from "../util/util";

const router = express.Router();

//router.use(function timeLog(req: Request, res: Response, next: NextFunction) {
//  util.authenticateToken(req, res, next);
//});

router.get("/admin", adminController.getAdmin);

router.post("/admin", adminController.createAdmin);

export default router;
