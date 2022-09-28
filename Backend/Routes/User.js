const express = require('express');
const router = express.Router();
// get the information form user

router.post("/", (req,res)=>{
    console.log(req.body);
})

module.exports = router;