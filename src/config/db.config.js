const mongoose = require('mongoose');

const { MONGO_URI } = require('./server.config.js');

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        const connectionResponse = await mongoose.connect(MONGO_URI);
        console.log("Connection Eastblished to the DB Host: ", connectionResponse.connection.host);
    }catch(error) {
        console.log('Error on connection to DB', error);   
    }

};

connectDB();

module.exports = mongoose;