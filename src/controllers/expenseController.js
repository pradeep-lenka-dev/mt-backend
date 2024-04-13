const expenseService = require("../services/expenseService");
require("dotenv").config()
const commonService = require("../services/commonservice")
const path = require('path')
const fileName = path.basename(__filename);

const expenseController = {

    addExpense: async (req, res) => {
        let params = req.body
        params.isDelete = false
        params.createdBy = user_id
        try {

            const addExpense = await expenseService.addExpense(params)
            res.status(200).json({ message: 'Add Wxpense successful!', updatedExpense: addExpense });

        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'addExpense()',
                userId: params.useId
            };
            await commonService.logError(errorObj)
        }
    },
    getRecentExpenses: async (req, res) => {
        let params = req.body
        try {
            console.log(l);

            const latestExpense = await expenseService.getRecentExpenses(params)
            res.status(200).json({ message: 'get expense successfull', expense: latestExpense })

        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'getRecentExpenses()',
                userId: params.useId
            };
            await commonService.logError(errorObj)
        }
    },

    getAllExpense: async (req, res) => {
        try {
            const AllExpense = await expenseService.getExpense()
            res.status(200).json({ message: 'get expense successfull', expense: AllExpense })

        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'getAllExpense()',
                userId: params.useId
            };
            await commonService.logError(errorObj)
        }
    },

    getCurentMonthExpense: async (req, res) => {
        try {
            const AllExpense = await expenseService.getCurentMonthExpense(req.body);
            res.status(200).json({ status: 'success', message: 'get expense successful', expense: AllExpense });
        } catch (error) {
            const errorObj = {
                code: '140',
                message: error.message,
                fileName: fileName,
                functionName: 'getCurentMonthExpense()',
                userId: params.useId
            };
            await commonService.logError(errorObj)
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }


}

module.exports = expenseController
