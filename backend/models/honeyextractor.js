
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Honeyextractor = new Schema({
   numberofhoneyextractor: {
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
   collection: 'honeyextractor'
})

module.exports = mongoose.model('Honeyextractor', Honeyextractor)
