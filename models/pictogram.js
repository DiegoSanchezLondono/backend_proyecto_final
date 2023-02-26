
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictogramSchema = new Schema ({
   categories: {
        type: Array,
        required: true
   },
   tags: {
        type: Array,
        required: true
   },
   keyword: {
        type: String,
        required: true
   },
   meaning: {
        type: String,
        required: true
   }
});

const Pictogram = mongoose.model("Pictogram", pictogramSchema);
module.exports = Pictogram;