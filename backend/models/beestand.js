
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Beestand = new Schema({
   beestandtypeobject:{
      type: String
  },
    numberofstand: {
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
   collection: 'beestand'
})

module.exports = mongoose.model('Beestand', Beestand)
