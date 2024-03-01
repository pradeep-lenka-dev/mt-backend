const jwt = require('jsonwebtoken');
require("dotenv").config()

function authenticate(req, res, next) {

    // const authHeader = req.headers['authorization'];
    console.log("midlewear", req.headers)
    // if (!authHeader) {
    //     res.status(401).json({ error: "Autherisatin header is missing" });

    // }

    let header = req.headers
    let authorization = req.headers.authorization
    console.log("authorization 123", typeof (authorization))
    const token = JSON.parse(authorization);
    console.log("🚀 ~ authenticate ~ token:", token.token)
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