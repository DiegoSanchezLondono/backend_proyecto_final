
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    pictogramId: {
        type: String,
    },
    pictogram:{
        type: String,
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Video',
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;