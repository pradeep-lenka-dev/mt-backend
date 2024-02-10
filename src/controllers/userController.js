const userService = require("../services/userService")
const UserController = {

    getAllUsers: async (req, res) => {
        console.log("calll login")
        try {
            const users = await userService.getAllUsers()
            console.log("Users from UserController USERS:", users)
            res.json(users)
            //return users;

        } catch (error) {

        }

    },

    // checkUser: async (req, res) => {
    //     try {
    //         var params = req.body
    //         const isExist = await userService.checkUser(params)
    //         res.json(isExist)

    //     } catch (error) {

    //     }
    // },

    // createUser: async (req, res) => {
    //     const params = req.body
    //     console.log("controller params", params)

    //     try {
    //         const newUser = await userService.createUser(params)
    //         res.status(200).json({ message: 'Signup successful!', user: newUser });


    //     } catch (error) {

    //     }
    // },

    login: async (req, res) => {
        // res.send("call Api")
        console.log("calll Api")
        var params = req.body
        console.log(params)
        try {
            const { email, password } = req.body;

            const result = await userService.login({ email, password });
            console.log(result)
            if (result.status === 200) {
                // Login successful
                res.status(result.status).json({ message: result.message, user: result.user });

                //res.send("i am alive")
            } else {
                // Login failed
                res.status(result.status).json({ error: result.message });
            }
        } catch (error) {
            console.error("Error in login route:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports = UserController;
