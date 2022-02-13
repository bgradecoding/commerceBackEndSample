import express from "express";
import "dotenv/config";
import { body } from "express-validator";
import * as authController from "../controller/auth";

var router = express.Router();

const validateCredential = [
  body("adid")
    .trim()
    .notEmpty()
    .withMessage("id should be at least 5 characters"),
  body("adpw")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
];

router.post("/token", authController.tokenValidator);

router.delete("/logout", authController.logout);

router.post("/login", validateCredential, authController.login);

export default router;
