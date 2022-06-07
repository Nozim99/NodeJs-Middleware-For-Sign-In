// const isLogin = (req, res, next) => {
//   const isLogin = 0;

//   if (isLogin) next();
//   else res.send("<h1>Sahifadan ro'yhatdan o'ting</h1>");
// };

function isLogin(req, res, next){
  const isLogin = false;

  if(isLogin)
    next();
  else
    res.send('<h1>Sahifadan ro\'yhatdan o\'tishingiz kerak</h1>')
}

module.exports = isLogin;

// Kommentga olingan ko'd bilan bir xil natijani beradi