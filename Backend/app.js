require('dotenv').config();
const express = require('express'); 
const app = express(); 
app.use(express.json());
const mongoose = require('mongoose'); 
const port = process.env.Port || 5000; 
const testRouter = require("./Routes/Test.js")
const UserRouter = require("./Routes/User.js")
app.use("/test", testRouter);

app.use("/signup", UserRouter)

app.listen(port, ()=>{console.log(`Listening to server on port ${port}.`)})

 