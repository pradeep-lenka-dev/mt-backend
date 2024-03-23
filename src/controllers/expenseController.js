const expenseService = require("../services/expenseService");
const jwt = require('jsonwebtoken');
require("dotenv").config()
const expenseController = {

    addExpense: async (req, res) => {
        let params = req.body
        console.log("🚀 ~ addExpense: ~ params:", params)
        params.isDelete = false
        params.createdBy = user_id

        try {

            const addExpense = await expenseService.addExpense(params)
            res.status(200).json({ message: 'Add Wxpense successful!', updatedExpense: addExpense });

        } catch (error) {

        }
    },
    getRecentExpenses: async (req, res) => {
        let params = req.body
        try {
            const latestExpense = await expenseService.getRecentExpenses(params)
            res.status(200).json({ message: 'get expense successfull', expense: latestExpense })

        } catch (error) {

        }
    },

    getAllExpense: async (req, res) => {
        try {
            const AllExpense = await expenseService.getExpense()
            res.status(200).json({ message: 'get expense successfull', expense: AllExpense })

        } catch (error) {

        }
    },

    getCurentMonthExpense: async (req, res) => {
        try {
            const AllExpense = await expenseService.getCurentMonthExpense(req.body);
            res.status(200).json({ status: 'success', message: 'get expense successful', expense: AllExpense });
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }
    

}

module.exports = expenseController
