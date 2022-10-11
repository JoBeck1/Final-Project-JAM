const express = require('express');
const router = express.Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcrypt');
const {signup, login}= require('../controller.js/userControler')
const {auth} = require('../middelware/auth')
const FlashCard = require('../model/Flashcard')
const { body, validationResult } = require('express-validator');
const {flashcardController} = require('../controller.js/flashcardController')
// git the information from user

router.post('/signup',signup )


router.post("/login", login)

//  check  the token 

router.get('/profile', auth, function(req, res){
    res.json("welcome in your profile ")
})
router.post("/flashcardcreateNL/flipCreate", flashcardController)


  

module.exports = router;
