const { TaskRepository } = require('../repositories/index.js');

const taskRepository = new TaskRepository();

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

module.exports = TaskService;