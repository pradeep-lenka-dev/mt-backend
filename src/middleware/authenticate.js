const jwt = require('jsonwebtoken');
require("dotenv").config()
const ErrorLog = require("../models/errorLogsModel")
const path = require('path')

function authenticate(req, res, next) {
    let header = req.headers
    let authorization = req.headers.authorization
    const token = JSON.parse(authorization);
    const secretKey = process.env.JWT_SECRET;
    jwt.verify(token.token.accessToken, secretKey, (error, decoded) => {
        if (error) {
            jwt.verify(token.token.refreshToken, secretKey, async (error, decoded) => {
                if (error) {
                    const fileName = path.basename(__filename);
                    const errorLog = new ErrorLog({
                        timestamp: new Date(),
                        errorCode: '140',
                        errorMessage: error.message,
                        errorAt: fileName,
                    })
                    await errorLog.save()
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