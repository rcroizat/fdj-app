import mongoose from 'mongoose';


const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    thumbnail: {
        type: String
    },
    signin:  {
            amount : { type:  Number },
            currency : { type: String }
            },
    born: {
        type: Date
    },

})

export default mongoose.model('Players', playerSchema)
