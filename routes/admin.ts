import express from "express";
import "dotenv/config";

require("dotenv").config();

const adminModel = require("../model/admin");
const util = require("../util/util");

const router = express.Router();

router.use(function timeLog(req, res, next) {
  util.authenticateToken(req, res, next);
});

router.get("/admin", async (req, res) => {
  try {
    const result = await adminModel.getAdmin();

    if (result) {
      res.json(result);
    } else {
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/admin", async (req, res) => {
  try {
    const result = await adminModel.getAdmin(req.body);

    if (result) {
      res.json(result);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default router;
