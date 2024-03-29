
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
    rolId: {
        type: Schema.Types.ObjectId, ref: 'Role',
        required: false,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;