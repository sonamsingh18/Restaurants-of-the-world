const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');
const res_det =require('./models/restaurant_d');
const res_rev =require('./models/restaurant_rev');
const csvtojson=require("csvtojson");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { 
    console.log('Database is connected');
    mongoose.connection.dropDatabase();         },
  err => { console.log('Can not connect to the database'+ err)}
);

csvtojson({noheader:false,headers:['restaurant_id','restaurant_name','restaurant_cuisines',
    
        'restaurant_average_cost_for_two','currency','has_table_booking','has_online_delievery',
        'aggregate_rating','rating_color','rating_text',
        'votes']}).fromFile("./restaurant_review.csv").then(jsonData=>{
    res_rev.insertMany(jsonData);
});

csvtojson({noheader:false,headers:['restaurant_id','country_code','city',
'address','locality','locality_verbose',
'longitude','latitude']}).fromFile("./restaurant_details.csv").then(jsonData=>{
 // console.log(jsonData);
    res_det.insertMany(jsonData);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/posts', postRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});