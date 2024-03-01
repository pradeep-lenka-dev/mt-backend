const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const expenseController = require('../controllers/expenseController');
const authenticate = require("../middleware/authenticate")

router.route('/login').post(UserController.login);
router.route('/users').get(UserController.getAllUsers);
router.route('/signup').post(UserController.createUser);
router.route('/addexpense').post(authenticate, expenseController.addExpense)
router.route('/getAllExpense').get(expenseController.getAllExpense)
router.route('/getRecentExpenses').post(expenseController.getRecentExpenses)

//const login = require ('../controllers')

module.exports = router