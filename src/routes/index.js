const express = require('express');
const router = express.Router();

const userRouter = require('./user.router.js');
const taskRouter = require('./task.router.js');

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;