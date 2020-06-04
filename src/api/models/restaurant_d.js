const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let res_det = new Schema({
  restaurant_id:{
      type:Number,
      required:'this field is required!'
  },
  country_code:{
    type:Number,
    required:'this field is required!'
    },
    city:{
        type:String,
        required:'this field is required!'
    },
    address:{
        type:String
    },
   locality:{
        type:String
    },
    locality_verbose:{
        type:String
    },
    longitude:{
        type:Number
    },
    latitude:{
        type:Number
    }
});

module.exports = mongoose.model('res_det',res_det);
