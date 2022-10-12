const FlashCard = require('../model/Flashcard')


const flashcardController=  async(req, res) => {
    let {frontSideLine1, frontSideLine2,backSideLine1, backSideLine2}= req.body.text

    let {deckName}= req.body
    console.log(deckName);
 
console.log(req.body);
   try {
 
          const result= await  FlashCard.create({frontSideLine1, frontSideLine2, backSideLine1, backSideLine2,deckName})

       
          res.json({message: "your card is created successfully", data:result})
 
   }  catch (err) {
     res.json({message: err.message})
   }
 }






module.exports ={flashcardController}