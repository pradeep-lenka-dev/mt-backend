const ErrorLog = require('../models/errorLogsModel')
class commonService {

    async logError(params) {
            const errorLog = new ErrorLog({
                timestamp: new Date(),
                errorCode: params.code,
                errorMessage: params.message,
                //errorAt: fileName,
                errorAt: `${params.fileName} -> ${params.functionName}`,
                userId: params.userId ? params.userId : '',
                username: params.username ? params.username:'',
            })
            await errorLog.save()
    }
}
module.exports = new commonService()