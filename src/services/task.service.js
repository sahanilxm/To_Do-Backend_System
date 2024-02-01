const { taskRepository } = require('../repositories/index.js');

class TaskService{
    addTask = async (details) => {
        const task = await taskRepository.addTask(details);
        return task;
    }

    getAllTask = async (details) => {
        const task = await taskRepository.getAllTask(details);
        return task;
    }

    updateTask = async (details) => {
        const task = await taskRepository.updateTask(details);
        return task;
    }

    removeTask = async (details) => {
        const task = await taskRepository.removeTask(details);
        return task;
    }

};

const taskService = new TaskService();

module.exports = taskService;