const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config.js');
const Router = require('./routes/index.js');
require('./config/db.config.js');

const serverSetup = () =>{
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false}));

    server.use('/api', Router);

    server.listen(PORT, () => {
        console.log(`Server Started on Port number: ${PORT}`);
    });
};

serverSetup();