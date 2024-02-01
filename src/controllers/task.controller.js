const { TaskService } = require('../services/index.js');
const taskService = new TaskService();

class TaskController{
    addTask = async (req, res) => {
        const details = {
            title : req.body.title,
            description : req.body.description,
            due_date : req.body.due_date,
            user_ID : req.user.id
        };

        const task = await taskService.addTask(details);
        console.log(task);
        res.status(task.status).json({
            data : task.data,
            message : task.message,
            error: task.error,
            success : task.success
        });
    }

    getAllTask = async (req, res) => {
        const task = await taskService.getAllTask({
            user_ID : req.user.id
        });
        res.status(task.status).json({
            data : task.data,
            message : task.message,
            error: task.error,
            success : task.success
        });

    }

    updateTask = async (req, res) => {
        const task = await taskService.updateTask({
            id : req.body.id,
            due_date : req.body.due_date,
            status : req.body.status
        });
        res.status(task.status).json({
            data : task.data,
            message : task.message,
            error: task.error,
            success : task.success
        });
    }

    removeTask = async (req, res) => {
        const task = await taskService.removeTask({
            id : req.body.id
        });
        res.status(task.status).json({
            data : task.data,
            message : task.message,
            error: task.error,
            success : task.success
        });
    }
};

module.exports = TaskController;