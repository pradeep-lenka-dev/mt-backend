const ErrorLog = require('../models/errorLogsModel')
class commonService {

    async logError(params) {
            const errorLog = new ErrorLog({
                timestamp: new Date(),
                errorCode: '140',
                errorMessage: error.message,
                errorAt: fileName,
                username: req.body.email,
            })
            await errorLog.save()
    }
}
module.exports = new commonService()