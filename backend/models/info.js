const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Info = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   phonenumber: {
      type: Number
   },
   subject: {
      type: String
   },
   yourmessage: {
      type: String
   }
}, {
   collection: 'info'
})

module.exports = mongoose.model('Info', Info)