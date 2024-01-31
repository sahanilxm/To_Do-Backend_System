const mongoose = require('mongoose');

const Status = {
    TODO: "todo",
    IN_PROGRESS: "process",
    DONE: "done"
};

const taskSchema = mongoose.Schema({
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        userId: { 
            type: String, 
            required: true 
        },
        status: { 
            type: String, 
            default: Status.TODO.toString() 
        },
        due_date: {
            type: Date,
            required: true
        },
        priority: {
            type: Number,
        }
    }, 
    { 
        timestamps: true 
    }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;

