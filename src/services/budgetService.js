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

}
module.exports = new budgetService()