const express = require('express');
const router = express.Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcrypt');
const {signup}= require('../controller.js/userControler')
const {postHandler} = require('../middelware/usercontroller')
// git the information from user

router.post('/',signup )




module.exports = router;
