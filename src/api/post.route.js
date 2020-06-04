const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let Post = require('./models/post.model');
let res_det=require('./models/restaurant_d');
let restaurant_rev=require('./models/restaurant_rev');

//get all the details or restaurant
postRoutes.route('/getRest').get(function(req,res){
    res_det.find(function(err,datas){
        if(err){
          res.json(err);
        }
        else
        {
          res.json(datas);
        }
    });
});
//rating in descnding order

postRoutes.route('/ratingDec').get(function(req,res){
  restaurant_rev.find().sort('-aggregate_rating').select().exec(function(err,data){
    if(err){
      res.json(err);
    }
    res.json(data);
  });
});
//sort according to rating

postRoutes.route('/sortVotes').get(function(req,res){
  restaurant_rev.find().sort('votes').select().exec(function(err,data){
    if(err){
      res.json(err);
    }
    res.send(data);
  });
});
postRoutes.route('/sortVotesDec').get(function(req,res){
  restaurant_rev.find().sort('-votes').select().exec(function(err,data){
    if(err){
      res.json(err);
    }
    res.send(data);
  });
});
//cost for two

postRoutes.route('/costForTwo').get(function(req,res){
  restaurant_rev.find().sort("restaurant_average_cost_for_two").select().exec(function(err,data){
    if(err){
      res.json(err);
    }
    res.send(data);
  })
});
//get a partcular restaurant

postRoutes.route('/searchName/:id').get(function(req,res){
  restaurant_rev.findOne({restaurant_name:req.params.id},function(err,data){
    if(err){
      console.log('not found');
      res.json(err);
    }
    res.json(data);
  })
});

//get restaurant name

postRoutes.route('/getRestName').get(function (req, res) {
  restaurant_rev.find(function(err, posts){
  if(err){
    res.json(err);
  }
  else {
    res.json(posts);
  }
});
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Post.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined store route
postRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});


// Defined edit route
// postRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Post.findOne({restaurant_id:id}, function (err, post){
//       if(err) {
//         res.json(err);
//       }
//       res.json(post);
//   });
// });

postRoutes.route('/findId/:id').get(function(req,res){
  //console.log('id is ',req.params.id);
  
  res_det.findOne({restaurant_id:req.params.id},function(err,post){
    if(err){
      res.json(err);
    }
    //console.log('data is ',post.restaurant_id);
    res.json(post);
  });
});

postRoutes.route('/edit/:id').get(function (req, res) {
   
    let id = req.params.id;
    Post.findOne({username:id},function (err, post){
        
        if(post.username!=id) {
          res.json(err);
        }
        res.json(post);
    });
  });


  // find phone using findOne 

  postRoutes.route('/findPhone/:id').get(function (req, res) {
   
    let id = req.params.id;
    Post.findOne({phone:id},function (err, post){
        
        if(err) {
          res.json(err);
        }
        res.json(post);
    });
  });
//   postRoutes.route('/password/:id').get(function (req, res) {
//     let iss = req.params.id;
//     Post.findOne({password:iss}, function (err, post){
//         if(post.password!=iss) {
//           res.json(err);
//         }
//         res.json(post);
//     });
//   });

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete').delete(function (req, res) {
   // console.log(req.body);
    //let idd=req.params.id;
    Post.findOneAndDelete({phone: req.body.phone}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes
