const express = require('express');
const router = express.Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcrypt');
const {signup, login}= require('../controller.js/userControler')
const {auth} = require('../middelware/auth')
const FlashCard = require('../model/Flashcard')
const { body, validationResult } = require('express-validator');
const {flashcardController} = require('../controller.js/flashcardController')
const {upDate} = require('../controller.js/upDateControler')
// git the information from user

router.post('/signup',signup )


router.post("/login", login)


//  check  the token 

router.get('/profile', auth, function(req, res){
    console.log(`Getting request from ${req.session.user.firstName}`)
    res.json({login: true, user: req.session.user})
})
router.post("/flashcardcreateNL/flipCreate", flashcardController)

router.get('/flashcardcreate/learning', async(req, res)=>{
const data= await FlashCard.find()
console.log(data);
res.json(data)

})
  

router.post("/userprofile", auth,upDate )

module.exports = router;
