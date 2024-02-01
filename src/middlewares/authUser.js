const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/server.config');

const authUser = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authorization.split(' ')[1] + "";
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        req.token = token;
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = authUser;