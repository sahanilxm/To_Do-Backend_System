const cron = require('node-cron');

const { userModel, taskModel} = require('../models/index.js');
const twilioService = require('./twilio.service.js');
const { taskRepository } = require('../repositories/index.js');

class CronService {
    constructor() {
        this.currentPriority = 0;
    }
    
    startScheduler() {

        cron.schedule('0 0 * * *', async () => {
            try {
                await taskRepository.updateTaskPriority();
                console.log('Task priorities updated.');
            } catch (error) {
                console.error('Error updating task priorities:', error.message);
            }
        });

        cron.schedule('15 10 * * *', async () => {
            try {
                console.log('Voice calls initiated.');
                await this.makeVoiceCalls();
            } catch (error) {
                console.error('Error making voice calls:', error.message);
            }
        });
    }


    async makeVoiceCalls() {
        while (this.currentPriority <= 2) {
            const users = await this.fetchUsersByPriorityAndDueDate(this.currentPriority);
            for (const user of users) {
                try {
                    await twilioService.createCall(user.phone);
                } catch (error) {
                    console.error(`Error making voice call for user ${user._id}: ${error.message}`);
                }
            }
            this.currentPriority++;
        }
        this.currentPriority = 0;
    }

    async fetchUsersByPriorityAndDueDate(priority) {
        try {
            const currentDate = new Date();
            const dueDate = new Date(currentDate);
            dueDate.setDate(dueDate.getDate() + priority);

            const users = await userModel.find({ priority: priority });

            const tasks = await taskModel.find({
                due_date: { $lte: dueDate },
                user_ID: { $in: users.map(user => user._id) }
            });

            const uniqueUserIds = [...new Set(tasks.map(task => task.user_ID))];
            const usersWithTasks = await userModel.find({ _id: { $in: uniqueUserIds } });
            return usersWithTasks;
        } catch (error) {
            console.error('Error fetching users by priority and due date:', error.message);
            throw error;
        }
    }
}

const cronService = new CronService();

module.exports = cronService;