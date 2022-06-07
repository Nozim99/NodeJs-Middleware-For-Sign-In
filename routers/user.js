const express = require("express");
const router = express.Router();

// Middleware For Sign In
const isLogin = require("../helper/isLogin");

router.get("/", isLogin, (req, res) => {
  res.send("<h1>User sahifasi</h1>");
});

module.exports = router;
