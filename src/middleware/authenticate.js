const jwt = require('jsonwebtoken');
require("dotenv").config()

function authenticate(req, res, next) {
    let header = req.headers
    let authorization = req.headers.authorization
    const token = JSON.parse(authorization);
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token.token, secretKey, (err, decoded) => {
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