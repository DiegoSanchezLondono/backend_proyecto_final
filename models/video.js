
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;