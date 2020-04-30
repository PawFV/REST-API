const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   contact: {
      type: String,
      required: true
   },
   dateCreated: {
      type: Date,
      required: true,
      default: Date.now()
   }
})


module.exports = mongoose.model('User', userSchema)