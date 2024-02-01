const { UserService } = require('../services/index.js');

const userService = new UserService();

class UserController {

    registerUser = async (req, res) => {
        const details = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            priority : req.body.priority
        };
        try {
            const user = await userService.registerUser(details);
            res.status(user.status).json({
                data : user.data,
                message : user.message,
                error: [],
                success : user.success
            });

        } catch (err) {
            res.status(500).json({
                data : [],
                message : err.message,
                error: err,
                success : false
            });
        }
    }

    loginUser = async (req, res) => {
        try {
            const details = {
                email : req.body.email,
                password : req.body.password
            };
            const user = await userService.loginUser(details);
            res.status(user.status).json({
                data : user.data,
                message : user.message,
                error: [],
                success : user.success
            });
        } catch (err) {
            res.status(500).json({
                data : [],
                message : err.message,
                error: err,
                success : false
            });
        }
    }

}

module.exports = UserController;