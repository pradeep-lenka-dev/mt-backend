const User = require('../models/userModel')

class userService {
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