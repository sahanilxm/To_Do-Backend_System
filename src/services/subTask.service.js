const { SubTaskRepository } = require('../repositories/index.js');

const subTaskRepository = new SubTaskRepository();

class SubTaskService{
    addSubTask = async (details) => {
        const subtask = await subTaskRepository.addSubtask(details);
        return subtask;
    }

    getAllSubTasks = async (details) => {
        const subtask = await subTaskRepository.getAllSubtasks(details);
        return subtask;
    }

    updateSubTask = async (details) => {
        const subtask = await subTaskRepository.updateSubTask(details);
        return subtask;
    }

    removeSubTask = async (details) => {
        const subtask = await subTaskRepository.removeSubTask(details);
        return subtask;
    }
};

module.exports = SubTaskService;