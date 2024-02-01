const { taskModel, Status } = require("../models/task.model.js");

// const CronService = require('../cron-services/cron.service.js');
// const cronService = new CronService();

class TaskRepository{
    addTask = async (details) => {
        const newTask = new taskModel(details);
        try{
            const task = await newTask.save();
            const user_ID = details.user_ID;
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

    updateTaskPriority = async () => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const allTasks = await taskModel.find();
        for(const task of allTasks){
            const due_date = task.due_date;
            due_date.setHours(0, 0, 0, 0);
            const timeDifference = due_date.getTime() - currentDate.getTime();
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            if(daysDifference <= 0){
                task.priority = 0;
            }
            else if(daysDifference <= 2){
                task.priority = 1;
            }
            else{
                task.priority = 2;
            }
            await task.save();
        }
    }
    
};

const taskRepository = new TaskRepository();

module.exports = taskRepository;