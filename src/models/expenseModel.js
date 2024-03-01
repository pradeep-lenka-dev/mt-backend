const mongoose = require('mongoose')
const expenseSchema = new mongoose.Schema({
    expenseName: { type: String },
    expenseCategory: { type: String },
    expenseAmount: { type: Number },
    expenseDate: { type: Date },
    isDelete: { type: Boolean },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //createdAt: {}
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense