const express = require("express");
const router = express.Router();

// Middleware For Sign In
// const isLogin = require("../helper/isLogin");

router.get("/", (req, res, next) => {
  const user = false;

  if (user) res.send("<h1>User Sahifasi</h1>");
  else return next({ status: 404, message: "User is not found" });
});

module.exports = router;
