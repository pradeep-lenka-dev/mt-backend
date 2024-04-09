const jwt = require("jsonwebtoken")

class authService {
    async generateToken(params) {
        const accessToken = jwt.sign({ _id: params._id, email: params.email, password: params.password }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ _id: params._id, email: params.email, password: params.password }, process.env.JWT_SECRET);
        return ({ accessToken, refreshToken });
    }
}
module.exports = new authService