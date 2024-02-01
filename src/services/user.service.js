const { UserRepository } = require('../repositories/index.js');

const userRepository = new UserRepository();

class UserService{
    registerUser = async (details) => {
        const user = await userRepository.registerUser(details);
        return user;
    }

    loginUser = async (details) => {
        const user = await userRepository.loginUser(details);
        return user;
    }
};

module.exports = UserService;