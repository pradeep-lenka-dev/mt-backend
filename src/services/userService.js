const User = require('../models/userModel')
const jwt = require("jsonwebtoken")

class userService {
    async generateToken(params) {
        console.log("paams from token gen", params._id)
        const accesstoken = jwt.sign({
            _id: params._id,
            email: params.email,
            password: params.password
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' })
        const refreshToken = jwt.sign({
            _id: params._id,
            email: params.email,
            password: params.password
        },
            process.env.JWT_SECRET,
            { expiresIn: '1m' });

        return jwt.sign(
            {
                _id: params._id,
                email: params.email,
                password: params.password
            },
            process.env.JWT_SECRET,
            { expiresIn: '1m' }
        );

    }
    async getAllUsers() {
        try {
            const users = await User.find()
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

            return { status: 500, message: 'Internal Server Error' };
        }
    }

}

module.exports = new userService()