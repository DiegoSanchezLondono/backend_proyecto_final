
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
       
    },
    pictogramId: {
        type: Schema.Types.ObjectId, ref: 'Pictogram',
       
    },
    videoId: {
        type: Schema.Types.ObjectId, ref: 'Video',
       
    },
    date: {
        type: Date,
        required: true
    }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;