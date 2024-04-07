const jwt = require("jsonwebtoken")

class authService {
    async generateToken(params) {
        console.log("paams from token gen", params._id)
        // const accesstoken = jwt.sign({
        //     _id: params._id,
        //     email: params.email,
        //     password: params.password
        // },
        //     process.env.JWT_SECRET,
        //     { expiresIn: '1h' })
        // const refreshToken = jwt.sign({
        //     _id: params._id,
        //     email: params.email,
        //     password: params.password
        // },
        //     process.env.JWT_SECRET,
        //     { expiresIn: '1m' });

        const accessToken = jwt.sign({ _id: params._id, email: params.email, password: params.password }, process.env.JWT_SECRET, { expiresIn: '1m' });

        const refreshToken = jwt.sign({ _id: params._id, email: params.email, password: params.password }, process.env.JWT_SECRET);
        return ({ accessToken, refreshToken });

        // return jwt.sign(
        //     {
        //         _id: params._id,
        //         email: params.email,
        //         password: params.password
        //     },
        //     process.env.JWT_SECRET,
        //     { expiresIn: '1hr' }
        // );

    }

    // async refreshGeneraten() {

    // }

}
module.exports = new authService