// const postHandler= (req, res, next) => {
//     const {firstName, Surname, Email, Age, Password, ConfirmPassword} = req.body.data;
//     let errors= []
//     // checking required fields
//   if (!firstName|| !Surname|| !Email|| !Age|| !Password|| !ConfirmPassword)
//   {  errors.push(" Please fill in all fields")}
//   // checking password match
//   if (Password!==ConfirmPassword) {
//     errors.push(" Password do not match")}
//     if (errors.length > 0) {
//         const error = new Error("Password do not match!")
//         next(error)
//     }
//     else {
//         next();
//         return
//     }
     
//   }
//   module.exports = {postHandler}