const express = require('express')
const connect = require("./configs/db");
const app = require("./index");


const ejs = require("ejs")

// const app = express()
// app.use(express.josn())

const teacherController = require('./controllers/teacher.controller')

const classesController = require("./controllers/classes.controller");

const adminController = require("./controllers/admin.controller");


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index')
})

app.use('/teacher', teacherController);

app.use('/classes', classesController);

app.use("/admin", adminController)





app.listen(2345, async function () {
  await connect();
  console.log("listening on 2345");
});
