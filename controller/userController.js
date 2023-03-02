const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const User = require("../models/userModels");
const sendToken = require("../utils/jwttoken");
const Order = require('../models/ordercollection')


// register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, Phone, Address , Street} = req.body;
    const user = await User.create({
      name,
      email,
      password,
      phonenumber:Phone,
      Address,
      Street
    });
// res.status(200).json(user);
    sendToken(user , 200 , res);
  });


  // Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne( {$or: [
    { email: email },
    { phonenumber: email }
  ]}).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

 sendToken(user , 200 , res)
});

exports.orderPlace = catchAsyncErrors(async (req, res, next) => {
  const { Delivery, Phone,total,numberofearbud,userEmail } = req.body;
console.log(userEmail);
  // checking if user has given password and email both

  if (!Delivery || !Delivery) {
    return next(new ErrorHander("Please Enter DDELIVERY ADDRESS AND PHONE NUMBER", 400));
  }
  
  const order = await Order.create({
    deliveryadd:Delivery,
    deliveryphone:Phone,
    numberofearbud,
    total,
    userEmail

  });
res.status(200).json(order);
 
});


  