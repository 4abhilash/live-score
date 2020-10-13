const mongoose = require('mongoose')

const {Schema} = mongoose;

const overSchema = new Schema({
    batTeam : String,
    bowlTeam : String,
    totalRuns : Number,
    overNum : Number,
    bowler : String,
    description : [{
        ballNum : Number,
        onStrike : String,
        wide : Boolean,
        noBall : Boolean,
        wicket : Boolean,
        runs : Number,
        legBye : Boolean,
        bye : Boolean
    }]
})

module.exports = mongoose.model("over",overSchema)