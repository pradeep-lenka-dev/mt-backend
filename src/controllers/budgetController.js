const budgetService = require('../services/budgetService')
const commonService = require("../services/commonservice")
const path = require('path')
const fileName = path.basename(__filename);

const budgetController = {
    addBudget: async (req, res) => {
        try {
            let params = req.body
            params.isDelete = false
            params.user_id = user_id
            const addBudget = await budgetService.addBudget(params)
            res.status(200).json({ message: 'Add Budget successful!', updatedExpense: addBudget });

        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'addBudget()',
                userId: user_id
            };
            await commonService.logError(errorObj)

        }
    },

    getBudget: async (req, res) => {
        const userId = new mongoose.Types.ObjectId(params.userId);
        params = {
            userId: userId,
        }
        try {
            const budget = await budgetService.getBudget(params)
            res.status(200).json({ message: 'Get Budget successful!', budget: budget });

        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'getBudget()',
                userId: userId
            };
            await commonService.logError(errorObj)

        }
    }
}

module.exports = budgetController