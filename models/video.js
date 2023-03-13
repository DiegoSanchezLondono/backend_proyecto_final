
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    idYoutube: {
        type: String,
    }
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;