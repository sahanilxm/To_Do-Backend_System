const express = require('express');

require('./config/db.config.js');
const { PORT } = require('./config/server.config.js');


const serverSetup = () =>{

    const server = express();

    server.listen(PORT, () => {
        console.log(`Server Started on Port number: ${PORT}`);
    });
};

serverSetup();