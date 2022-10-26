const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  frontSideLine1: { type: String, required: [true, 'please fill all fields '] },
  frontSideLine2: { type: String, required: [true, 'please fill all fields '] },
  backSideLine1: { type: String, required: [true, 'please fill all fields '] },
  backSideLine2: { type: String, required: [true, 'please fill all fields '] },
  deckName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: false,
    default: null,
  },
});

const FlashCard = mongoose.model('FlashCard', FlashcardSchema);
module.exports = FlashCard;
