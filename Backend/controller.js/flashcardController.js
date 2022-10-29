const FlashCard = require('../model/Flashcard');
const mongoose = require('mongoose')
const flashcardController = async (req, res) => {
  let { frontSideLine1, frontSideLine2, backSideLine1, backSideLine2 } =
    req.body.text;

  let { deckName } = req.body;
  console.log(deckName);

  console.log(req.body);
  try {
    console.log('Inserting Item with Id: ' + req.session.user);
    const result = await FlashCard.create({
      frontSideLine1,
      frontSideLine2,
      backSideLine1,
      backSideLine2,
      deckName,
      user: req.session.user? req.session.user._id: null,
    });

    res.json({ message: 'your card is created successfully', data: result });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
};

const myCards= async (req, res) => {
  try {
     if (req.session.user) {
       console.log(req.session.user)
      const card = await FlashCard.find({user: req.session.user._id}).populate("user")
      console.log("myacrd===>",card);

      res.json(card)
     }
      } catch (err) {
    console.log(err)
    res.json({ message: err.message });
  }
}

const AllCards= async (req, res) => {
  try {
    if (req.session.user) {
      const allCards = await FlashCard.find()
      res.json(allCards)

    }
  } catch (err) {
    res.json({ message: err.message });
    console.log(err);
  }
}

module.exports = { flashcardController , myCards, AllCards};
