require("dotenv").config();
var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
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
    const accesToken = generateToken({ name: user.name });
    res.json(accesToken);
  });
});

router.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

router.post("/login", (req, res) => {
  console.log("login router");
  console.log(req.body);
  //Authenticate User
  const username = req.body.username;
  const user = { name: username };
  const accesToken = generateToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accesToken, refreshToken: refreshToken });
});

function generateToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

module.exports = router;
