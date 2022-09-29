const express = require('express');
const router = express.Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcrypt');
// git the information from user
router.post('/', (req, res) => {
  const result = req.body;
  const saltRound = 10;
  bcrypt.hash(result.data.Password, saltRound, (err, hashPassword) => {
    result.data.Password = hashPassword;

    new User(result.data).save((err) => {
      if (err) {
        console.log(err);
      }
      console.log('the data is saved to mongodb');
      // res.json(" a user is created successfully")
    });
  });
  bcrypt.hash(result.data.ConfirmPassword, saltRound, (err, hashPassword) => {
    result.data.ConfirmPassword = hashPassword;
    User(result.data).save((err) => {
      if (err) {
        console.log(err);
      }
      res.json('data is saved successfully');
      console.log(result.data);
    });
  });
});

module.exports = router;
