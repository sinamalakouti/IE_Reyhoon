const express = require("express");
const restaurant = require("../models/restaurant.js");

const restaurantRouter = express.Router();

restaurantRouter
  .get("/", (req, res) => {
      console.log("HI");
  
    if ( req.query.area && req.query.categories){

        restaurant.model.find({'address.area': req.query.area} , (err, rests) =>{
            if ( err){
                res.send(err);
                console.log("errrror shiiit");
            }
                
            var result = [];
            for ( category in req.query.categories){
                for ( i  in  rests){
                    if ( rests[i]['category'] == category){
                        result.push(i);
                    }
                }

            }

            res.send(result)


        });

       
    }else if ( req.query.area){

        restaurant.model.find({'address.area': req.query.area}, (err, rests) => {

            res.send(rests);
        });
    }
})
    .get('/area/:area',   (req, res) => {
            restaurant.model.find({'address.area': {$regex: req.query.area}}, (err, result)=>{
                if ( err)
                    res.send(err);
                res.send(result);

            } );
                
            })
      

    .get('/:id', (req, res ) => {

        restaurant.model.find({name: req.params.id}, (err, res)=>
        {   
           var  result = [];
            for ( i in res){
                
                 avg_score = 0; 
                 quantity = 0;
                for( j in res['comments']){
                    avg_score = avg_score + j['quality'];
                    quantity = quantity + 1;

                }
                avg_score = avg_score / quantity;
                i['averageRate'] = avg_score;
                result.push(i);
            }
            res.send(result);


        });


    })

    .get("/:id/comments", (req, res) =>{

        Room.find({name: req.params.id}).sort([['date', -1]]).exec(function(err, docs) { 

            if ( err)
            res.send(err);
            res.send(docs);
         });


    })

  
  .post("/", (req, res) => {
   
  });
module.exports = restaurantRouter;
