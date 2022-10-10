const FlashCard = require('../model/Flashcard')


const flashcardController=  async(req, res) => {
    let {frontSideLine1, frontSideLine2,backSideLine1, backSideLine2}= req.body.text
   try {
 
          const result= await  FlashCard.create({frontSideLine1, frontSideLine2, backSideLine1, backSideLine2})
          res.json({message: "your card is created successfully"})
 
   }  catch (err) {
     res.json({message: err.message})
   }
 }






module.exports ={flashcardController}