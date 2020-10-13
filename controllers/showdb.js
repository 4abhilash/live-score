const overModel = require("../models/over")

module.exports.showDb = async function(req,res){
    try {
        var result = await overModel.find();
        res.send(result);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
