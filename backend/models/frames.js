
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Frames = new Schema({
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
   collection: 'frames'
})

module.exports = mongoose.model('Frames', Frames)
