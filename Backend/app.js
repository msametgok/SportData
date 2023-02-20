const express = require('express');
const mongoose = require("mongoose");
const pageRoute = require('./routes/pageRoute')
const userRoute = require('./routes/userRoute')


//mongodb+srv://msametgok:<password>@sportdatadb.pllmv0s.mongodb.net/?retryWrites=true&w=majority
//mongodb://127.0.0.1/sportdata

mongoose.set("strictQuery", false);
//Connect DB
mongoose.connect("mongodb+srv://msametgok:eAjn5pwVTtEPii9t@sportdatadb.pllmv0s.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Connection successful");
}).catch(err => {
    console.log(err);
});

const app = express();

//Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/',pageRoute);
app.use('/users', userRoute)

const port = 3000;

app.listen(port, () => {
    console.log(`App started on port ${port}`);
})