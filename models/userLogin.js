const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
   userName: {
      type: String,
      unique: true
   },
   password: {
      type: String
   }
});


module.exports = mongoose.model('UserLogin', userLoginSchema);