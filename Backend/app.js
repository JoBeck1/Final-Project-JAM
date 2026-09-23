require('dotenv').config();
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);
const express = require('express'); 
const app = express(); 
const cors = require('cors');
app.use(express.json());
const mongoose = require('mongoose');
const session= require('express-session');




// used cookie to store the token
const cookieParser= require("cookie-parser");
app.use(cookieParser())

app.use(cors({
  origin: true,
  credentials: true
}));
const port = process.env.PORT || 5000;
app.use(session({
    secret: 'secret-key',
    cookie: {
  maxAge: 1000 * 60 * 60 * 60,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
},
    resave: true,
    saveUninitialized:true
}));
const testRouter = require("./Routes/Test.js")


const UserRouter = require("./Routes/User.js")

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });// app.use("/signup")

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

 