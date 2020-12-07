import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    players: {
        type: [mongoose.ObjectId]
    },

})

export default mongoose.model('Teams', teamSchema);
