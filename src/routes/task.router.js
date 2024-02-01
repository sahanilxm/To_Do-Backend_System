const express = require('express');
const router = express.Router();

const { TaskController } = require('../controllers/index.js');
const authUser = require('../middlewares/authUser.js'); 

const taskController = new TaskController();

router.post("/add", authUser, taskController.addTask);
router.get("/all", authUser, taskController.getAllTask);
router.patch("/update", authUser, taskController.updateTask);
router.delete('/delete', authUser, taskController.removeTask);

module.exports = router;