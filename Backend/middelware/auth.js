const jwt = require('jsonwebtoken')

const auth= async (req, res, next) => {

try {
    // grab the token to verify 
const token = await req.cookies["myToken"]
  
    if (typeof token !== "undefined") {
        decodedData = await jwt.verify(token,"secret-key")
        if (decodedData){
            req.authenticated = true
        }
    } else {
        res.json("user not authenticated")
    }
  
    next()

} catch (err) {
    console.log(err);
    res.json({ error: err})
}


}
module.exports = {auth}