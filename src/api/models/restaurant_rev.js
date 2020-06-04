const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let res_rev = new Schema({
  restaurant_id:{
      type:Number,
      required:'this field is required!'
  },
  restaurant_name:{
    type:String,
    required:'this field is required!'
    },
    restaurant_cuisines:{
        type:String
    },
    restaurant_average_cost_for_two:{
        type:Number
    },
    currency:{
        type:String
    },
    has_table_booking:{
        type:String,
        required:'this field is required!'
    },
    has_online_delievery:{
        type:String,
        required:'this field is required!'
    },
    aggregate_rating:{
        type:Number
    },
    rating_color:{
        type:String
    },
    rating_text:{
        type:String
    },
    votes:{
        type:Number
    }
});

module.exports = mongoose.model('res_rev',res_rev);
