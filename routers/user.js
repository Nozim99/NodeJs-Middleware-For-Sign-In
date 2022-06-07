const express = require("express");
const router = express.Router();

// Middleware For Sign In
router.use((req, res, next)=>{
  const isLogin = false;

  if (isLogin)
    next();
  else 
    res.send('Sahifadan ro\'yhatdan o\'ting')
})
// 

router.get("/", (req, res) => {
  res.send("<h1>User sahifasi</h1>");
});

module.exports = router;
