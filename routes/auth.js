require("dotenv").config();
var express = require("express");
const jwt = require("jsonwebtoken");
const authModel = require("../model/admin");
const util = require('../util/util')

var router = express.Router();
let refreshTokens = [];

//middleware로 쓰는 곳
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accesToken = util.generateToken({ name: user.name });
    res.json(accesToken);
  });
});

router.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});



router.post("/login", async (req, res) => {

  try{
    
    const result = await authModel.loginAdmin(req.body.userid, req.body.password)

    if( result ){
      const user = { name: result.ADID };
  
      const accesToken = util.generateToken(user);
    
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    
      refreshTokens.push(refreshToken);
    
      res.json({ accessToken: accesToken, refreshToken: refreshToken });

    }else {
      res.sendStatus(401);
    }
  }catch(err){
    console.log(err)
    res.sendStatus(500);
  }

});



module.exports = router;
