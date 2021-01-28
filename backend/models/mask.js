
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Mask = new Schema({
   numberofmask: {
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
   collection: 'mask'
})

module.exports = mongoose.model('Mask', Mask)
