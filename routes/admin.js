require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const adminModel = require("../model/admin");
const util = require('../util/util')

const router = express.Router();

router.use(function timeLog(req, res, next) {
  util.authenticateToken(req, res, next)
});

router.get("/getAdmins", async (req, res) => {

  try{
    
    const result = await adminModel.getAdmin()
    console.log( 'admin get ------------'+ result)
    if( result ){
    
      res.json(result);

    }else {
      res.sendStatus(401);
    }
  }catch(err){
    console.log(err)
    res.sendStatus(500);
  }

});



module.exports = router;
