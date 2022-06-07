const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Index sahifasi</h1>");
});

router.get('/so\'roq?', (req, res)=>{
  res.send('localhost:5000/so\'roq bunda ohirgi harf yozilmasa ham ushbu sahifa ochiladi M: localhost:5000/so\'ro')
})

router.get('/yulduzcha*', (req,res)=>{
  res.send('localhost:5000/yulduzcha  dan keyin istalgancha harf yozilsa ham shu sahifa ochiladi. M: localhost:5000/yulduzchaistagancha')
})

router.get('/plus+', (req, res)=>{
  res.send('localhost:5000/plus ohiridagi harfni takrorlab yozsa ham ushbu sahifani ochadi. M: localhost:5000/plusssssss')
})

module.exports = router;
