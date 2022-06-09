const express = require("express");
const app = express();
const port = 5000;

// Module Init
const signIn = require("./routers/signin.js");
const signUp = require("./routers/signUp.js");
const index = require("./routers/index.js");
const user = require("./routers/user.js");
const profile = require("./routers/profile.js");
const res = require("express/lib/response");


// Router Use
app.use("/user", signIn);
app.use("", signUp);
app.use("", index);

// Router Use For User
app.use("/user", user);
app.use("/profile", profile);

// Express Error Handling
app.use((err, req, res, next) => {
  res.status(err.status);
  res.render('error', {
    message: err.message,
    status: err.status
  });
});

// Express Static
app.use(express.static("public"));

app.listen(port);
