const express = require('express');
const { registerUser, loginUser } = require('../controller/userController');
const { subscribeUser, orderPlace } = require('../controller/email');

const router = express.Router();

// register user route
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route('/subscribe').post(subscribeUser)
router.route("/placeorder").post(orderPlace)
module.exports = router;
