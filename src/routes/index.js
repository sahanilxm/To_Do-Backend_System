const express = require('express');
const router = express.Router();

const userRouter = require('./user.router.js');
const taskRouter = require('./task.router.js');
const subTaskRouter = require('./subTask.router.js');

router.use('/user', userRouter);
router.use('/task', taskRouter);
router.use('/subTask', subTaskRouter);

module.exports = router;