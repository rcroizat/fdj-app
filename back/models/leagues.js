import mongoose from 'mongoose';


const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    sport: {
        type: String,
    },
    teams: {
        type: [mongoose.ObjectId]
    },

})

export default  mongoose.model('Leagues', leagueSchema)
