const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema({
    //budgetName: { type: String },
    budgetAmount: { type: Number },
    budgetDate: { type: Date },
    isDelete: { type: Boolean },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})
const Budget = mongoose.model('Budget', budgetSchema);


module.exports = Budget