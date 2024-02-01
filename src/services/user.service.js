const { UserRepository } = require('../repositories/index.js');

const userRepository = new UserRepository();

class UserService{
    registerUser = async (details) => {
        try{
            const user = await userRepository.registerUser(details);
            return user;
        } catch (err){
            return err;
        }
    }

    loginUser = async (details) => {
        try{
            const user = await userRepository.loginUser(details);
            return user;
        } catch (err){
            return err;
        }
    }
};

module.exports = UserService;