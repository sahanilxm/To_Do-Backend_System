const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        phone_number: {
            type: Number, 
            required: true
        },
        priority: {
            type: Number,
            default: 3
        }
    },
    {
        timestamps : true
    }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;