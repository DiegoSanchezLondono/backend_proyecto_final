
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true
    },
    country : {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },

});

const User = mongoose.model("User", userSchema);
module.exports = User;