const Expense = require('../models/expenseModel')
const mongoose = require("mongoose")
const moment = require('moment')


class expenseService {
    async addExpense(params) {
        console.log("service params", params)
        try {
            const addExpense = new Expense(params);
            const addexpense = await addExpense.save();
            return addexpense

        } catch (error) {
            console.log(error)
        }
    }

    async getRecentExpenses(params) {

        let userId = params.useId;
        try {
            let startDate = moment().startOf('day')
            let endDate = moment().endOf('day')
            let query = {
                createdBy: new mongoose.Types.ObjectId(userId),
                expenseDate: {
                    $gte: startDate.toDate(),
                    $lt: startDate.endOf('day').toDate()
                }
            }
            const recentExpense = await Expense.find(query)
            return recentExpense

        } catch (error) {
            console.log("🚀 ~ expenseService ~ getRecentExpenses ~ error:", error)

        }
    }

    async getExpense(params) {
        try {
            let con = {
                isDelete: "false",
                // createdBy: mongoose.ObjectId(params.userId)
                createdBy: new mongoose.Types.ObjectId(params.useId)

            }
            const expense = await Expense.find(con)
            return expense

        } catch (error) {

        }
    }

    async getCurentMonthExpense(params) {
        try {
            const userId = new mongoose.Types.ObjectId(params.userId);
            const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            let query = {
                createdBy: userId,
                expenseDate: {
                    $gte: startOfMonth,
                    $lte: endOfMonth
                }
            }
            const expenses = await Expense.find(query)
            return expenses
        } catch (error) {

        }
    }

}

module.exports = new expenseService()