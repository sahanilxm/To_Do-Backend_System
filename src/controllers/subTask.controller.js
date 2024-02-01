const { SubTaskService } = require('../services/index.js');

const subTaskService = new SubTaskService();

class SubTaskController{
    addSubTask = async (req, res) => {
        const details = {
            task_ID : req.body.id, 
            content : req.body.content
        };
        const subtask = await subTaskService.addSubTask(details);
        res.status(subtask.status).json({
            data : subtask.data,
            message : subtask.message,
            error: subtask.error,
            success : subtask.success
        });
    }

    getAllSubTasks = async (req, res) => {
        const details = {
            task_ID : req.body.id
        };
        const subtask = await subTaskService.getAllSubTasks(details);
        res.status(subtask.status).json({
            data : subtask.data,
            message : subtask.message,
            error: subtask.error,
            success : subtask.success
        });
    }

    updateSubTask = async (req, res) => {
        const details = {
            id : req.body.id,
            status: req.body.status
        };
        let subtask = await subTaskService.updateSubTask(details);
        res.status(subtask.status).json({
            data : subtask.data,
            message : subtask.message,
            error: subtask.error,
            success : subtask.success
        });
    }

    removeSubTask = async (req, res) => {
        const details = {
            id : req.body.id
        };
        const subtask = await subTaskService.removeSubTask(details);
        res.status(subtask.status).json({
            data : subtask.data,
            message : subtask.message,
            error: subtask.error,
            success : subtask.success
        });
    }
};

module.exports = SubTaskController;