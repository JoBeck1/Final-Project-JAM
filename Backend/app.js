require('dotenv').config();
const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(express.json());
const mongoose = require('mongoose');
const session= require('express-session');




// used cookie to store the token
const cookieParser= require("cookie-parser");
app.use(cookieParser())

app.use(cors())
const port = process.env.Port || 5000; 
app.use(session({
    secret: 'secret-key',
    cookie: {
maxAge:1000*60*60*60
    },
    resave: true,
    saveUninitialized:true
}));
const testRouter = require("./Routes/Test.js")


const UserRouter = require("./Routes/User.js")

mongoose.connect("mongodb://localhost:27017/projecta?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false").then(() => {console.log("Connected to MongoDB")}).catch((error)=>{console.log(error)})
// app.use("/signup")

app.use("/test", testRouter);

app.use("/", UserRouter);



//Global error handler
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error :{
            msg:error.message
        }
    })
})







app.listen(port, ()=>{console.log(`Listening to server on port ${port}.`)})

 