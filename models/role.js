
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema ({
    rol: {
        type: Array,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;