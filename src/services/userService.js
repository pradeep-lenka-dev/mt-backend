const User = require('../models/userModel')
const jwt = require("jsonwebtoken")

class userService {
    async generateToken(params) {
        console.log(params)
        return jwt.sign({ email: params.email }, 'secret', { expiresIn: '1h' })

    }
    async getAllUsers() {
        try {
            console.log("call service")
            const users = await User.find()
            console.log(users, "asdfgh")
            return users
        } catch (error) {
            console.log("error from service error:", error)
        }

    }


    async createUser(params) {
        console.log("service params", params)
        try {
            const newUser = new User(params);
            const savedUser = await newUser.save();

            return savedUser

        } catch (error) {
            console.log(error)

        }
    }


    async login(params) {
        console.log("service params", params)
        try {
            const { email, password } = params;

            const user = await User.findOne({ email, password }).exec();

            if (!user) {
                return { status: 401, message: "Invalid credentials" };
            }
           

            return { status: 200, message: 'Login successful', user };
        } catch (error) {
            console.error("Error in login:", error);
            return { status: 500, message: 'Internal Server Error' };
        }
    }

}

module.exports = new userService()