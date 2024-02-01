const express = require('express');
const router = express.Router();

const { SubTaskController } = require('../controllers/index.js');
const authUser = require('../middlewares/authUser.js'); 

const subTaskController = new SubTaskController();

router.post("/add", authUser, subTaskController.addSubTask);
router.get("/all", authUser, subTaskController.getAllSubTasks);
router.patch("/update", authUser, subTaskController.updateSubTask);
router.delete('/delete', authUser, subTaskController.removeSubTask);

module.exports = router;