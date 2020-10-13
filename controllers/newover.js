const overModel = require("../models/over")

module.exports.newOver = async function(req,res){

    var batTeam = req.body.batTeam
    var bowlTeam = req.body.bowlTeam
    var totalRuns = req.body.totalRuns
    var overNum = req.body.overNum
    var bowler = req.body.bowler
    var description = req.body.description
   


    let _over = new overModel({

        "batTeam" : req.body.batTeam,
        "bowlTeam" : req.body.bowlTeam,
        "totalRuns" : req.body.totalRuns,
        "overNum" : req.body.overNum,
        "bowler" : req.body.bowler,
        "description" : req.body.description,
       
    })
    
    let data = await _over.save()
    res.send(data) 
}
