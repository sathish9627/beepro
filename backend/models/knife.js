
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Knife = new Schema({
   numberofknife: {
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
   collection: 'knife'
})

module.exports = mongoose.model('Knife', Knife)
