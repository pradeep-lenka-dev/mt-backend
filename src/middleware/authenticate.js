const jwt = require('jsonwebtoken');
require("dotenv").config()

function authenticate(req, res, next) {
    let header = req.headers
    console.log("🚀 ~ authenticate ~ header:", header)
    let authorization = req.headers.authorization
    console.log("🚀 ~ authenticate ~ authorization:", authorization)
    const token = JSON.parse(authorization);
    console.log("🚀 ~ authenticate ~ token:", token.token.accessToken)
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token.token.accessToken, secretKey, (err, decoded) => {
        if (err) {
            console.error("expenseController 18 err:", err)
        }
        user_id = decoded._id
        req.user = decoded;
        next();
        console.warn("expenseController 18 decoded:", decoded)
    })


}
module.exports = authenticate