const express = require("express");
const router = express.Router();

router.get('/signUp', (req, res)=>{
  res.send('signUp! Sign In Sahifasi GET Methodi')
})

router.post('/signUp', (req, res)=>{
  res.send('signUp! POST Methodi. Postman dasturi orqali ochildi')
})

module.exports = router;
