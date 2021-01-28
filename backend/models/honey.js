
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Honey = new Schema({
   quantityofhoney: {
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
   collection: 'honey'
})

module.exports = mongoose.model('Honey', Honey)
