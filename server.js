const express = require("express");

const app = express();

const worktime = (req, res, next) => {
  let time = new Date();
  console.log(time);
  if (
    time.getDay() > 0 &&
    time.getDay() <= 5 &&
    time.getHours() >= 9 &&
    time.getHours() <= 17
  ) {
    next();
    console.log(time.getDay());
  } else res.sendFile(__dirname + "/public/closed.html");
};

app.use(worktime);

app.use(express.static(__dirname + "/public"));

app.listen(5000, () => console.log("server is running ok !"));
