const express = require('express');
const mongoose = require("mongoose");
const pageRoute = require('./routes/pageRoute')

mongoose.set("strictQuery", false);
//Connect DB
mongoose.connect("mongodb://127.0.0.1/sportdata").then(() => {
  console.log("Connection successful");
}).catch(err => {
    console.log(err);
});

const app = express();

//Middlewares


//Routes
app.use('/',pageRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`App started on port ${port}`);
})