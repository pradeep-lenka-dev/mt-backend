const jwt = require('jsonwebtoken');
require("dotenv").config()

function authenticate(req, res, next) {
    let header = req.headers
    let authorization = req.headers.authorization
    const token = JSON.parse(authorization);
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token.token.accessToken, secretKey, (err, decoded) => {
        if (err) {
            //return res.status(401).json({ error: 'Unauthorized' });
            jwt.verify(token.token.refreshToken, secretKey, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ error: 'Unauthorized' });
                }
                user_id = decoded._id
                req.user = decoded;
                next();
            })
        } else {
            user_id = decoded._id
            req.user = decoded;
            next();

        }
    })


}
module.exports = authenticate