const { taskModel, Status } = require("../models/task.model.js");

class TaskRepository{
    addTask = async (details) => {
        console.log(details);
        const newTask = new taskModel(details);
        try{
            const task = await newTask.save();
            return {
                data : task,
                success : true,
                error : [],
                message : "Task Added Successfully.",
                status : 200
            };
        } catch (err){
            return {
                data : [],
                success : false,
                error : err,
                message : err.message,
                status : 500
            };
        }

    };

    getAllTask = async (details) => {
        try{
            const task = await taskModel.find({user_ID : details.user_ID});
            console.log(task);
            return {
                data : task,
                success : true,
                error : [],
                message : "Successfully fetched all tasks",
                status : 200
            };
            
        } catch (err){
            return {
                data : [],
                success : false,
                error : err,
                message : err.message,
                status : 500
            };
        }
    }

    updateTask = async (details) => {
        const {id, due_date, status} = details;

        let todoStatus;

        if(status == Status.DONE) 
            todoStatus = Status.DONE
        else if(status == Status.IN_PROGRESS)   
            todoStatus = Status.IN_PROGRESS
        else 
            todoStatus = Status.TODO

        const updateValue = {
            status: todoStatus,
            due_date: due_date
        }
        
        try{
            let task = await taskModel.findByIdAndUpdate({_id : id}, updateValue);
            task = await taskModel.find({_id : id});
            return {
                data : task,
                success : true,
                error : [],
                message : "Task Updated Successfully.",
                status : 200
            };

        } catch (err){
            return {
                data : [],
                success : false,
                error : err,
                message : err.message,
                status : 500
            };
        }
    }

    removeTask = async (details) => {
        const {id} = details;
        try{
            const task = await taskModel.findByIdAndDelete({_id : id});
            return {
                data : task,
                success : true,
                error : [],
                message : "Task deleted Successfully.",
                status : 200
            };

        } catch (err){
            return {
                data : [],
                success : false,
                error : err,
                message : err.message,
                status : 500
            };
        }
    }
};

module.exports = TaskRepository;