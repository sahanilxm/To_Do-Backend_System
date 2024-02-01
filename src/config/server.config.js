const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    DB_NAME : process.env.DB_NAME,
    SECRET_KEY : process.env.SECRET_KEY
}