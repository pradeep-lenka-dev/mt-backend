const budgetService = require('../services/budgetService')
const budgetController = {
    addBudget: async (req, res) => {
        try {
            let params = req.body
            params.isDelete = false
            params.user_id = user_id
            console.log("🚀 ~ addBudget: ~ params:", params)
            const addBudget = await budgetService.addBudget(params)
            res.status(200).json({ message: 'Add Budget successful!', updatedExpense: addBudget });

        } catch (error) {
            console.log("🚀 ~ addBudget: ~ error:", error)

        }
    },

    getBudget: async (req, res) => {
        console.log("🚀 ~ getBudget: ~ req:", req)
        budgetQuery = {
            user_id : user_id 

        }
        try {
            const budget = await budgetService.getBudget(budgetQuery)
        } catch (error) {
            console.log("🚀 ~ getBudget: ~ error:", error)

        }
    }
}

module.exports = budgetController