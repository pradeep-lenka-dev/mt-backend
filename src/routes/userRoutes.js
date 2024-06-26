const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const expenseController = require('../controllers/expenseController');
const authenticate = require("../middleware/authenticate");
const budgetController = require('../controllers/budgetController');
const categoriesController = require('../controllers/categoriesController');

router.route('/login').post(UserController.login);
router.route('/users').get(UserController.getAllUsers);
router.route('/signup').post(UserController.createUser);
router.route('/addbudget').post(authenticate, budgetController.addBudget);
router.route('/getbudget').post( budgetController.getBudget);
router.route('/addexpense').post(authenticate, expenseController.addExpense)
router.route('/getAllExpense').post(expenseController.getAllExpense)
router.route('/getRecentExpenses').post(expenseController.getRecentExpenses)
router.route('/getCurentMonthExpense').post(expenseController.getCurentMonthExpense)
router.route('/getCategoriesList').post(categoriesController.getCategoriesList)

//const login = require ('../controllers')

module.exports = router