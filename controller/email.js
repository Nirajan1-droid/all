const nodemailer = require('nodemailer');
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const ErrorHander = require("../utils/errorhandler");
const Email = require('../models/emailModels')
const mailgun = require("mailgun-js");
const DOMAIN = 'unicorn-lifestyle.net';
const Order = require('../models/ordercollection')
const Register = require('../models/registermail')
var mg = mailgun({apiKey: "0464881752d81ae8a92599f47683782d-ca9eeb88-3fe06b18"
  , domain: DOMAIN, host: "api.eu.mailgun.net",
});

exports.subscribeUser = catchAsyncErrors(async (req, res, next) => {
  const {userEmail, passwordveri, } = req.body;
      if (!userEmail) {
        return next(new ErrorHander("Please Enter Email ", 400));
      }
      let gmail = userEmail;
      console.log(gmail)
    
      const user = await Email.findOne({userEmail});
      
      
      if (user ) {
        return next(new ErrorHander("Already Subscribed", 401));
      }
    
      console.log(passwordveri)
      
      
    
         
         const data = passwordveri ? 
         {
           
            from: "UNICORN-BUDS <info.unicornlifestyles@gmail.com>",
            to: userEmail,
            subject: "Account Login Credentials",
             
            html: `<!DOCTYPE html>
              <html>
             <head>
               <title>UNICORN BUDS Order Confirmation</title>
             </head>
             <body style="font-family: Arial, sans-serif;">
               <h1>Thank You for Visiting Unicorn Buds!</h1>
               <p>Dear Customer,</p>
               <p>Thank you for visiting our website! We're thrilled that you're interested in our products and services. We hope that you found everything you were looking for and that you had a positive experience on our site.</p>
               <p>"Your password is <h2>${passwordveri}</h2>"</p>
               <p>Thank you again for visiting Unicorn Buds!</p>
               <p>Best regards,<br>The Unicorn Buds Team</p>
             </body>
           </html>`
          }:{
            from: "UNICORN-BUDS <info.unicornlifestyles@gmail.com>",
            to: userEmail,
            subject: "Subscription confirmation",
            html: `<!DOCTYPE html>
              <html>
             <head>
               <title>UNICORN BUDS LOGIN CREDENTIALS</title>
             </head>
             <body style="font-family: Arial, sans-serif;">
               <h1>Thank You for Visiting Unicorn Buds!</h1>
               <p>Dear Customer,</p>
               <p>Thank you for visiting our website! We're thrilled that you're interested in our products and services. We hope that you found everything you were looking for and that you had a positive experience on our site.</p>
               
               <p>We will notify you whenever exciting offer available</p>
               <p>Best regards,<br>The Unicorn Buds Team</p>
             </body>
           </html>`
          };
        
        
          mg.messages().send(data, function (err, body) {
            console.log(body);
        });
 
      });
    
      exports.orderPlace = catchAsyncErrors(async (req, res, next) => {
        const { Delivery,
           Phone,
          numberofearbud,
          total,
          userEmail } = req.body;

          
            if (!userEmail&&!Phone&&!Delivery) {
              return next(new ErrorHander("Please Enter details ", 400));
            }
            
            const registers = await Order.find({userEmail});
             
             
            if(registers.length > 6){
              
             return  next(new ErrorHander("limit reached ", 400));
            }
             
            const order = await Order.create({
               Delivery,
               Phone,
              numberofearbud,
              total,
              userEmail
          
            },
             );
            
          res.status(200).json(order);
           
          
            // const user = await Email.findOne({userEmail});
            // if (user) {
            //   return next(new ErrorHander("Already Subscribed", 401));
            // }

 
             
            
            
          
               
               const value =  
               {
                 
                  from: "UNICORN-BUDS <info.unicornlifestyles@gmail.com>",
                  to: userEmail,
                  subject: "Account Login Credentials",
                   
                  html: `<!DOCTYPE html>
                  <h1>Thank You for Your Order!</h1>
                  <p>We have received your order and will process it shortly. Here are the details:</p>
                  <ul>
                  <li><strong>Company Name:</strong> Unicorn-Lifestyle</li>
                   
                    <li><strong>Delivery Address:</strong> ${Delivery}</li>
                    <li><strong>Phone Number:</strong> +977 ${Phone}</li>
                    <li><strong>Number of Earbuds:</strong> ${numberofearbud}</li>
                    <li><strong>Total Price:</strong> RS: ${total}</li>
                    <li><strong>User Email:</strong> ${userEmail}</li>
                  </ul>
                  <p>Thank you for choosing Unicorn-Lifestyle!</p>`
                } 
              
              
                  //mg.messages().send(value, function (err, body) {
mg.messages().send(value, function (err, body) {
  if (err) {
    console.log(err);
    res.status(500).send("Error sending message");
  } else {

    console.log(body);
    res.status(200).send("Message sent successfully");
  }
  res.status(200).send("Message sent successfully");
})                  

//console.log(body);
 //             })
               
       
            });
          
        
