const overModel = require("../models/over")


module.exports.wickets= async function (req,res){

    let over =await overModel.find(
         {
             "bowler":req.body.bowler
                },
     )
     var wicket =0
     for (var i = 0; i < over.length; i++) {        
         for (var j = 0; j < over[i].description.length; j++) {
             if (over[i].description[j].wicket==true) {
                 wicket++
             }
         }    
     
     }
   
     res.json(wicket)  
    }