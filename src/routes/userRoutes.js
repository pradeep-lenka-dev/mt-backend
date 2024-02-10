const express = require('express');
const router = express.Router()
const UserController = require('../controllers/userController')
router.route('/login').post(UserController.login)
router.route('/users').get(UserController.getAllUsers)
//const login = require ('../controllers')

module.exports = router