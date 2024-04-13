const userService = require("../services/userService")
const authService = require("../services/authService")
const ErrorLog = require("../models/errorLogsModel")
//const commonservice= require("../services/commonService")
// import commonService from "../services/commonService";
//const commonService = require("../services/commonService");


const path = require('path')

const UserController = {

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers()
            res.json(users)
        } catch (error) {

        }

    },

    createUser: async (req, res) => {
        const params = req.body
        try {
            const newUser = await userService.createUser(params)
            res.status(200).json({ message: 'Signup successful!', user: newUser });


        } catch (error) {

        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await userService.login({ email, password });
            if (result.status === 200) {
                const user = result.user
                const token = await authService.generateToken(result.user)
                const loginUser = {
                    useId: user._id,
                }
                res.json({ token, loginUser })
            } else {
                res.status(result.status).json({ error: result.message });
            }
        } catch (error) {
            const fileName = path.basename(__filename);

            const errorLog = new ErrorLog({
                timestamp: new Date(),
                errorCode: '140',
                errorMessage: error.message,
                errorAt: fileName,
                username: req.body.email,
            })
            await errorLog.save()
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = UserController;
