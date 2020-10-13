const overModel = require("../models/over")


module.exports.economy = async function(req,res){

    try {
        let overCount =  await overModel.aggregate(
        [
            {
                $match : { "bowler" : req.body.bowler },
            },
            {
                $count:"overs"
            }
        ]
    )
    overCount = overCount[0].overs



    let runsConceded=await overModel.aggregate(
    [{
        $match : { "bowler": req.body.bowler },
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
    runsConceded= runsConceded[0].total

         let  result= (runsConceded)/(overCount)
            res.json(result)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
           

}


