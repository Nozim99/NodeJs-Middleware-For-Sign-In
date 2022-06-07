const express = require("express");
const router = express.Router();

router.get('/signIn', (req, res)=>{
  res.send('Sign In Sahifasi GET Methodi')
})

router.post('/postman', (req, res)=>{
  res.send('POST Methodi. Postman dasturi orqali ochildi')
})

module.exports = router;
