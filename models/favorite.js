
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    pictogramId: {
        type: Schema.Types.ObjectId, ref: 'Pictogram',
        required: true
    },
    videoId: {
        type: Schema.Types.ObjectId, ref: 'Video',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;