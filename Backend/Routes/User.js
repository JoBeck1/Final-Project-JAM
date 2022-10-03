const express = require('express');
const router = express.Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcrypt');
const {signup, login}= require('../controller.js/userControler')
const {auth} = require('../middelware/auth')
// git the information from user

router.post('/signup',signup )


router.post("/login", login)

//  check  the token 

router.get('/token', auth, function(req, res){
    res.json("auth passed ")
})


module.exports = router;
