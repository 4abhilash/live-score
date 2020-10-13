const overModel = require("../models/over")


module.exports.score = async function(req,res){

    try {
        let runsScored=await overModel.aggregate(
    [{
        $match : { "batTeam": req.body.batTeam },
    },
    
    {
        $group : {
            _id : null,
               total : {
                $sum : "$totalRuns"
                
            }
        }
    }]            
    );
    runsScored= runsScored[0].total

         let  result= runsScored
            res.json(result)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
           

}



