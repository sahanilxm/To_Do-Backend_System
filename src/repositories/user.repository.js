const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { userModel } = require('../models/index.js');
const { SECRET_KEY } = require('../config/server.config.js');

class UserRepository {
    createToken = (id) => {
        return jwt.sign({ id }, SECRET_KEY, {
            expiresIn:  24 * 60 * 60
        });
    }

    registerUser = async (details) => {
        try {
            const email = details.email, password = details.password;
            const exists = await userModel.findOne({ email });
            if (exists) {
                return {
                    data : [],
                    success : false,
                    error : [],
                    message : "User already exists",
                    status : 400
                };
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new userModel({
                name: details.name,
                email: details.email,
                password : hashedPassword,
                phone: details.phone,
                priority: details.priority
            });
            const user = await newUser.save();
            const token = this.createToken(user._id);
            return {
                data : {user, token},
                success : true,
                error : [],
                message : "User successfully registered.",
                status : 200
            };
        } catch (err) {
            console.log(err);
            return {
                data : [],
                success : false,
                error : err,
                message : "Error while registering user.",
                status : 500
            };
        }
    }

    loginUser = async (details) => {
        const email = details.email, password = details.password;
        try {
            if (!email || !password) {
                return {
                    data : [],
                    success : false,
                    error : [],
                    message : "Please enter required fields",
                    status : 400
                };
            }
            const user = await userModel.findOne({ email });

            if (!user) {
                return {
                    data : [],
                    success : false,
                    error : [],
                    message : "User does not exist",
                    status : 400
                };
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return {
                    data : [],
                    success : false,
                    error : [],
                    message : "Invalid Password",
                    status : 400
                };
            }
            const token = this.createToken(user._id)
            return {
                data : {user, token},
                success : false,
                error : [],
                message : "Invalid Password",
                status : 400
            };
        } catch (err) {
            console.log(err);
            return {
                data : [],
                success : false,
                error : err,
                message : "Error while Login.",
                status : 500
            };
        }
    }
}

module.exports = UserRepository;