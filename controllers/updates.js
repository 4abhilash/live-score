const overModel = require("../models/over")

module.exports.updates = async function(req,res) {
    try {
        let result = await overModel.updateOne(
        {"_id":req.body._id},
        {$push:
        {"description":req.body.description},
        $inc: { "totalRuns": req.body.description.runs} }  
    );
    res.send(result)
        }catch(error){
            console.log(error);
            res.status(500).send(error);
        }
}