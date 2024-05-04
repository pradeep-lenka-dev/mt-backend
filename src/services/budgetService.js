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

    async getBudget(params) {
        try {
            const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            console.log("🚀 ~ budgetService ~ getBudget ~ endOfMonth:", endOfMonth)
            let budgetQuery = {
                createdBy: params.userId,            
                budgetDate: {
                    $gte: startOfMonth,
                    $lte: endOfMonth
                }
            }
            const budget = await Budget.findOne(budgetQuery)
            return budget

        } catch (error) {/*  */

        }
    }

}
module.exports = new budgetService()