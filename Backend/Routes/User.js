const express = require('express'); 
const router = express.Router();
// git the information from user
router.post("/", (req, res) => {
    console.log(req.body);
})



module.exports = router;