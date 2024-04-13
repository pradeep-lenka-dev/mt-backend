const mongoose = require("mongoose")

const errorLogSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    errorCode: { type: String, required: true },
    errorMessage: { type: String, required: true },
    errorAt: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: { type: String },
})

const ErrorLog = mongoose.model('ErrorLog', errorLogSchema)

module.exports = ErrorLog