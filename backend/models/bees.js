
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Bees = new Schema({
   beetypeobject:{
      type: String
  },
    numberofframes: {
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
   collection: 'bees'
})

module.exports = mongoose.model('Bees', Bees)
