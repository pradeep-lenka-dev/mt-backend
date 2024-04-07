const Budget = require('../models/budgetsModel')
class budgetService {

    async addBudget(params) {
        try {
            const addBudget = new Budget(params)
            const addbudget = await addBudget.save()
            return addBudget
        } catch (error) {

        }

    }

    async getBudget(budgetquery) {
        try {
            const budget = await Budget.findOne(budgetquery)
            return budget

        } catch (error) {

        }
    }

}
module.exports = new budgetService()