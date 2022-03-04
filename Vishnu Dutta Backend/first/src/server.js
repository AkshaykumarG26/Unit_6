const express = require("express");
const connect = require("./configs/db");
// const app = require("./index");
const app = express()


const userController = require('./controllers/user.controller')

app.use(express.json());


app.use("/user", userController)






















app.listen(1234, async function () {
  await connect();
  console.log("listening on 1234");
});
