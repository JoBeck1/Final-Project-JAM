const bcrypt = require('bcrypt');
const User = require('../model/Usermodel');
const jwt = require('jsonwebtoken')

 const signup = async (req, res) => {
    let {firstName, Surname, Email, Age, Password, ConfirmPassword} = req.body.data;
    try {
        const isUserExist = await User.findOne({Email})
    if (isUserExist) {
        return res.status(404).json({message: "user is already exist "})
    }
    const hashedPassword = await bcrypt.hash(Password, 10)
     Password = hashedPassword
     console.log({firstName, Surname, Email, Age, Password});
    const result = await User.create({
        firstName, Surname, Email, Age, Password
    })
    const token= jwt.sign({Email: result.Email}, "test")
    res.json({ token})
    console.log(token)
    // res.json(result)
    // console.log(result);

    } catch (error) {
        res.status(500).json({message:"something is wrong "})
    }
}
module.exports = {signup}