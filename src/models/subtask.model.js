const mongoose = require('mongoose');

const subTaskSchema = mongoose.Schema({
        task_ID: {
            type: String, 
            required: true
        },
        content: { 
            type: String 
        },
        status: { 
            type: Boolean, 
            default: false 
        }
    },
    { 
        timestamps: true 
    }
);

const subTaskModel = mongoose.model("SubTask", subTaskSchema);

module.exports = subTaskModel;