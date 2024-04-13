const userService = require("../services/userService")
const authService = require("../services/authService")
const commonService = require("../services/commonservice");

const path = require('path')
const fileName = path.basename(__filename);

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
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'login()',
                username: req.body.email,
            };
            await commonService.logError(errorObj)
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = UserController;
