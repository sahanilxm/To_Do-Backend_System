const mongoose = require('mongoose');

const { MONGO_URI, DB_NAME } = require('./server.config.js');

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        const DB_URL = MONGO_URI +  DB_NAME;
        const connectionResponse = await mongoose.connect(DB_URL);
        console.log("Connection Eastblished to the DB Host: ", connectionResponse.connection.host);
    }catch(error) {
        console.log('Error on connection to DB', error);   
    }

};

connectDB();

module.exports = mongoose;