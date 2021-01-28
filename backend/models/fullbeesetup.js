
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Fullbeesetup = new Schema({
   numberoffullbeesetup: {
      type: Number
   },
   phonenumber: {
      type: Number
   },
   addressline1:{
       type: String
   },
   addressline2:{
       type: String
   },
   pincode: {
      type: Number
   },
   queries: {
      type: String
   }
}, {
   collection: 'fullbeesetup'
})

module.exports = mongoose.model('Fullbeesetup', Fullbeesetup)
