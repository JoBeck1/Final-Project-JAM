const bcrypt = require('bcrypt');
const User = require('../model/Usermodel');
const jwt = require('jsonwebtoken');
// used cookie to store the token
const cookieParser= require("cookie-parser");

// register the user
const signup = async (req, res) => {
  // git the information of the user
  let { firstName, Surname, Email, Age, Password, ConfirmPassword } =
    req.body.data;
  try {
    // verify in the user exist
    const isUserExist = await User.findOne({ Email });
    if (isUserExist) {
      return res.json({ message: 'user is already exist ' });
    }
    // this code is not working good the server is down when the password is not matched
    // if (Password !== ConfirmPassword) {
    //   res.status(404).json({ message: 'password is not matched ' });
    // }
    
    // hash the password and send it to database
    const hashedPassword = await bcrypt.hash(Password, 10);
    Password = hashedPassword;
    console.log({ firstName, Surname, Email, Age, Password });

    // save into mongoDb
    const result = await User.create({
      firstName,
      Surname,
      Email,
      Age,
      Password,
    });
    // create a token and send it back to frontend
    const token = jwt.sign({ Email: result.Email }, 'secret-key');
    console.log(token);
    // res.json({ token: token });

    // create cookie
    res.cookie("myToken", token, {
        // the cookie will expire in a month
        maxAge:60*60*24*30*1000});



    res.json({message:"register successfully", user: result})

   
  } catch (error) {
    res.status(500).json({ message: 'something is wrong ' });
  }
};

// login the user

const login = async (req, res) => {
  let { Email, Password } = req.body.logindata;

  try {
    // get user from the MongoDB
    const isUserExist = await User.findOne({ Email });
    if (!isUserExist) {
      return res.json({ message: 'User not found' , });
    }
    else {

      const isPasswordCorrect = await bcrypt.compare(
        Password,
        isUserExist.Password
      );
  
      if (!isPasswordCorrect) {
        res.json({ message: 'invalid password' });
      }
      else {

        const token = jwt.sign({ Email: isUserExist.Email }, 'secret-key');
         // create cookie
         res.cookie("myToken", token, {
          // the cookie will expire in a month
          maxAge:60*60*24*30*1000});

          req.session.user= isUserExist
          req.session.save();
      res.json({ message:"login success",user:isUserExist })
        console.log(req.session.user);

      }
      }
    // check the data compare using bcrypt
  } catch (err) {
    res.json({ message: 'something is wrong' });
  }
};
const logout= async (req, res) => {
  req.session.destroy();
  res.json({ message: 'you are logged out' });
}




module.exports = { signup, login, logout };





