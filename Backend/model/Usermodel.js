const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    Surname: { type: String, required: true },
    Email: {
        type: String,
        unique: [true, "Email must be unique"],
        required: true,
        validate:[ (val) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            return true;
          }
          return false;
        }, "email is not valid"]
      },
    
    Age: { type: Number },
    Password: { type: String, required: true },
    ConfirmPassword: { type: String, required: true },
  },

  { timestamps: true },
  
);

const User = mongoose.model('Users', UserSchema);

module.exports = User;
