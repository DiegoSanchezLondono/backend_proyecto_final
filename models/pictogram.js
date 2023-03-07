
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictogramSchema = new Schema ({
     data_id: {
          type: Number,
          required: false,
     },
     keyword: {
          type: String,
          required: false
     },
     meaning: {
          type: String,
          required: false
     },
     categories: {
        type: Array,
        required: false
     },
     tags: {
        type: Array,
        required: false
     }
});

const Pictogram = mongoose.model("Pictogram", pictogramSchema);
module.exports = Pictogram;