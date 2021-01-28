
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Smoker = new Schema({
   numberofsmoker: {
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
   collection: 'smoker'
})

module.exports = mongoose.model('Smoker', Smoker)
