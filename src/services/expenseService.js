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
        //console.log("🚀 ~ expenseService ~ getRecentExpenses ~ params:", params)
        //const token = JSON.parse(params);


        let userId = params.useId;
        //console.log(userId);
        try {
            let startDate = moment().startOf('day')
            let endDate = moment().endOf('day')      //new Date()
            let query = {
                createdBy: new mongoose.Types.ObjectId(userId),
                expenseDate: {
                    $gte: startDate.toDate(),
                    $lt: startDate.endOf('day').toDate()
                }

            }
            //console.log("🚀 ~ expenseService ~ getRecentExpenses ~ query:", query)
            const recentExpense = await Expense.find(query)
            //console.log("🚀 ~ expenseService ~ getRecentExpenses ~ recentExpense:", recentExpense)
            return recentExpense
            //return { status: 200, message: 'Login successful', recentExpense };

        } catch (error) {
            console.log("🚀 ~ expenseService ~ getRecentExpenses ~ error:", error)

        }
        console.log("🚀 ~ expenseService ~ getRecentExpenses ~ startDate:", startDate)
        console.log("🚀 ~ expenseService ~ getRecentExpenses ~ startDate:", startDate)

    }

    async getExpense() {
        try {
            const expense = await Expense.find()
            return expense

        } catch (error) {

        }
    }

}

module.exports = new expenseService()