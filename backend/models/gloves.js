
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Gloves = new Schema({
   numberofgloves: {
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
   collection: 'gloves'
})

module.exports = mongoose.model('Gloves', Gloves)
