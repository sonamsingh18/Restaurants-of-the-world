const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  username: {
    type: String,
    required:'this field cannot left blank'
  },
  phone:{
    type:Number,
    required:'this field cannot left blank'
  },
  password: {
    type: String,
    required:'this field cannot left blank'
  },
  cnf_password:{
    type:String,
    required:'this field cannot left blank'
  }
});

module.exports = mongoose.model('Post', Post);
