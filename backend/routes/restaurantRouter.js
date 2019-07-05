const express = require("express");
const restaurant = require("../models/restaurant.js");
const { check } = require('express-validator/check');
const comment = require("../models/userComment.js");
const category = require("../models/category.js");
const food = require("../models/food.js");
const address = require("../models/address.js");
var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



const restaurantRouter = express.Router();

restaurantRouter.use (function (req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    
    next();
})
  .get("/", (req, res) => {
  
    if ( req.query.area && req.query.category){
        console.log("search by area and category");

        restaurant.model.find({'address.area': req.query.area} , (err, rests) =>{
            if ( err){
                res.send(err);
            }
                
            var result = [];
            categories = [];
            if (typeof req.query.category == "string"){
                categories.push(req.query.category);
            }else
                categories = req.query.category;

            for ( cat in categories){
                for ( i  in  rests){
                    for ( c in rests[i]["categories"]){
                        if ( (rests[i]['categories'])[c]['name'] == categories[cat]){
                            result.push(rests[i]);
                        }
                    }
                }

            }

            res.send(result)


        });

       
    }else if ( req.query.area){

            console.log(req.query.area)

        restaurant.model.find({'address.area': req.query.area}, (err, rests) => {

            res.send(rests);
        });
    }
})
    .get('/area/:area', cors(corsOptions),  (req, res) => {

            console.log("find area")
            console.log(req.params.area)
            restaurant.model.find({'address.area': {$regex: req.params.area}}, (err, result)=>{
                if ( err)
                    res.send(err);
                else{
                    let final_areas = [];

                    for( i in  result){
                        // if ( !final_areas.includes((result[i]['address'])['area'])){
                                
                               if( (result[i]['address'])['area'] ){

                                    let item = {
                                        area :    (result[i]['address'])['area'],
                                        city :   (result[i]['address'])['city'] 
                                    }

                                    final_areas.push(item)

                               }

                            // }
                    }

                    
                     // res.json(final_areas);
                                                      // var myJSON = JSON.stringify(final_areas);
                                                      // console.log("HI")
                                                      // console.log(myJSON)
                    let final_result = {
                        items : final_areas
                    }

                    // final_result = JSON.stringify(final_result);
                    res.json(final_areas);

                }
                    

            } );

            })
      

    .get('/:id', (req, res ) => {
        console.log("getting the restaurant");

        restaurant.model.find({name: req.params.id}, (err, rests)=>
        {  

            console.log(req.params.id)
           var  result = [];
            for ( i in rests){
                console.log("mishe inja beri?")
                 avg_score = 0; 
                 quantity = 0;
                 
                for( j in rests[i]['comments']){
                    avg_score = avg_score + (rests[i]['comments'])[j]['quality'];
                    quantity = quantity + 1;

                }
                avg_score = avg_score / quantity;
                rests[i]['averageRate'] = avg_score;
                result.push(rests[i]);
            }
            res.send(result);


        });


    })

    .get("/:id/comments", (req, res) =>{

        restaurant.model.find({name: req.params.id},(err, rest)=>{



        

            if ( err)
             res.send(err);
            else{   

                
                let cmres = [];
                for (i = 0 ; i < rest.length; i ++){
                    cmres.push(rest[i]['comments'])
                }
                cmres.sort(function(a,b){
                    return new Date( b.date) - new Date(a.date);
                });
                res.send(cmres);
            }
             
         });


    })


    // .get("/remove", (req, res) =>{

    //     restaurant.model.deleteMany({},(err, rest)=>{



    //         console.log("remove success")

             
    //      });

    //     res.send("success")


    // })
    .post("/:id/comments", [check('author').isLength({min: 1}),
        check('quality').isNumeric({min:0 , max :5}).withMessage("Not a valid Number or not in range ( 0 - 5)"),
        check('packaging').isNumeric(),
        check('deliveryTime').isNumeric(),
        check('text').not().isEmpty().withMessage("Empty text")],(req, res) => {
            let cmntObj = new comment.model();
            cmntObj.id = req.body.id;
            cmntObj.author = req.body.author;
            cmntObj.quality = req.body.quality;
            cmntObj.packaging = req.body.packaging;
            cmntObj.deliveryTime = req.body.deliveryTime;
            cmntObj.text = req.body.text;
            cmntObj.cmntObj = Date.now();
            restaurant.model.find({name : req.params.id}, (err, result) =>{
                if(err)
                    res.send("FAILURE");
                else
                {
                    result.comments.push(cmntObj);

                    res.json({
                        message: "success"
                      });
                }

            });
    })

  
  .post("/", [
      check("name").not().isEmpty().withMessage("EMPTY NAME!"),
      check("logo").not().isEmpty().withMessage("NO LOGO"),
      check("city").not().isEmpty(),
      check('area').not().isEmpty(),
      check('addressLine').not().isEmpty(), 
      check('openningTime').not().isEmpty(), 
      check('closingTime').not().isEmpty(), 
      

  ],(req, res) =>   { 

    console.log("now we are saving some restuarants:D")


    let new_address = new address.model();
    console.log(req.body.area)
    new_address.area = req.body.area;
    new_address.city = req.body.city;
    new_address.id= req.body.name;
    new_address.addressLine= req.body.addressLine;

    let new_categories = []
    let new_comments = []
    let new_food = []

    for( i in req.body.foods){
        let tmpFood = new food.model(req.body.foods[i]);
        new_food.push(tmpFood);
    }

    for( i in req.body.categories){
        let tmpCategory = new food.model(req.body.categories[i]);
        new_categories.push(tmpCategory);
    }

    var new_rest = new restaurant.model();
    new_rest.foods = new_food;
    new_rest.id = req.body.name;
    new_rest.name = req.body.name;
    new_rest.address = new_address;
    new_rest.comments = new_comments;
    new_rest.categories = new_categories;
    new_rest.closingTime = req.body.closingTime;
    new_rest.openningTime = req.body.openningTime;
    new_rest.averageRate = 0;
    new_rest.logo = req.body.logo;

    new_rest.save();
    res.json({
        message: "success"
      });
  });

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
module.exports = restaurantRouter;
