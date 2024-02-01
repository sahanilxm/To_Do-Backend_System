const { subTaskModel } = require('../models/index.js');

class SubTaskRepository{

    addSubtask = async (details) => {
        const newSubTask = new subTaskModel({
            task_ID : details.task_ID, 
            content : details.content, 
            status : false
        });
        try{
            const subTask = await newSubTask.save();
            return {
                data : subTask,
                success : true,
                error : [],
                message : "SubTask Added.",
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

    getAllSubtasks = async (details) => {
        try{
            const subTask = await subTaskModel.find({
                task_ID: details.task_ID
            });
            return {
                data : subTask,
                success : true,
                error : [],
                message : "Fetched all Subtasks Successfully.",
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

    updateSubTask = async (details) => {
        try{
            let subTask = await subTaskModel.findByIdAndUpdate({
                    _id: details.id
                }, {
                    status: details.status
                });
            subTask = await subTaskModel.find({
                _id : details.id
            });
            return {
                data : subTask,
                success : true,
                error : [],
                message : "SubTask Updated Successfully.",
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


    removeSubTask = async (details) => {
        try{
            const subTask = await subTaskModel.findByIdAndDelete({
                _id: details.id
            });
            return {
                data : subTask,
                success : true,
                error : [],
                message : "SubTask deleted Successfully.",
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
};

module.exports = SubTaskRepository;