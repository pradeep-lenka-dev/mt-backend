const budgetService = require('../services/budgetService')
const budgetController = {
    addBudget: async (req, res) => {

        //params.isDelete = false
        // params.createdBy = user_id

        try {
            console.log("call here....");
            let params = req.body
            console.log("🚀 ~ addBudget: ~ params:", params)
            const addBudget = await budgetService.addBudget(params)
            res.status(200).json({ message: 'Add Budget successful!', updatedExpense: addBudget });

        } catch (error) {
            console.log("🚀 ~ addBudget: ~ error:", error)

        }
    },
}

module.exports = budgetController