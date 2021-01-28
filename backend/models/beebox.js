
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Beebox = new Schema({
   numberofbox: {
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
   collection: 'beebox'
})

module.exports = mongoose.model('Beebox', Beebox)
