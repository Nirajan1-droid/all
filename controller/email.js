const nodemailer = require('nodemailer');
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const ErrorHander = require("../utils/errorhandler");
const Email = require('../models/emailModels')
// const mailgun = require("mailgun-js");
// const DOMAIN = 'unicorn-lifestyle.net';
// const mg = mailgun({apiKey: "668c1ee4b285559163c03b2e81788237-15b35dee-8c31151a"
//   , domain: DOMAIN});


//     exports.subscribeUser = catchAsyncErrors(async (req, res, next) => {
//       const {userEmail, passwordveri} = req.body;
//           if (!userEmail) {
//             return next(new ErrorHander("Please Enter Email ", 400));
//           }
//           let gmail = userEmail;
//           console.log(gmail)
        
//           const user = await Email.findOne({userEmail});
//           if (user) {
//             return next(new ErrorHander("Already Subscribed", 401));
//           }
        
//           console.log(passwordveri)



//        const data =
//         // passwordveri ? 
//     // ({
//     //    from: "Excited User <info@unicorn-lifestyle.net>",
//     //    to: userEmail,
//     //    subject: "Account Login Credentials",
        
//     //    text: `<!DOCTYPE html>
//     //      <html>
//     //     <head>
//     //       <title>UNICORN BUDS LOGIN CREDENTIALS</title>
//     //     </head>
//     //     <body style="font-family: Arial, sans-serif;">
//     //       <h1>Thank You for Visiting Unicorn Buds!</h1>
//     //       <p>Dear Customer,</p>
//     //       <p>Thank you for visiting our website! We're thrilled that you're interested in our products and services. We hope that you found everything you were looking for and that you had a positive experience on our site.</p>
//     //       <p>"Your password is <h2>${passwordveri}</h2>"</p>
//     //       <p>Thank you again for visiting Unicorn Buds!</p>
//     //       <p>Best regards,<br>The Unicorn Buds Team</p>
//     //     </body>
//     //   </html>`
//     //  }):({
//        {from: "Excited User <me@unicorn-lifestyle.net>",
//        to: userEmail,
//        subject: "Subscription confirmation",
//        text: "You have successfully subscribed!"};
//     //  })
//      console.log("use",userEmail)
//      console.log(data)
//     //  mg.messages.create(DOMAIN, data)
//     //  .then((res) => {
//     //    console.log(res);
//     //  })
//     //  .catch((err) => {
//     //    console.error(err);
//     //  });
//     mg.messages().send(data, function (error, body) {
//   console.log(body);
//   console.log(error);

// });
//   });


// //   const API_KEY = 'YOUR_API_KEY';
// // const DOMAIN = 'YOUR_DOMAIN_NAME';

// // const formData = require('form-data');
// // const Mailgun = require('mailgun.js');

// // const mailgun = new Mailgun(formData);
// // const client = mailgun.client({username: 'api', key: API_KEY});

// // const messageData = {
// //   from: 'Excited User <me@samples.mailgun.org>',
// //   to: 'foo@example.com, bar@example.com',
// //   subject: 'Hello',
// //   text: 'Testing some Mailgun awesomeness!'
// // };

// // mg.messages.create(DOMAIN, data)
// //  .then((res) => {
// //    console.log(res);
// //  })
// //  .catch((err) => {
// //    console.error(err);
// //  });


exports.subscribeUser = catchAsyncErrors(async (req, res, next) => {
  const {userEmail, passwordveri} = req.body;
      if (!userEmail) {
        return next(new ErrorHander("Please Enter Email ", 400));
      }
      let gmail = userEmail;
      console.log(gmail)
    
      const user = await Email.findOne({userEmail});
      if (user) {
        return next(new ErrorHander("Already Subscribed", 401));
      }
    
      console.log(passwordveri)
    
      
    
        // Send email only if email was saved successfully
        // if(!passwordveri){
          // const subsciption = {
          //   from: "nirajanolass@gmail.com",
          //   to: userEmail,
          //   subject: "Subscription confirmation",
          //   text: "You have successfully subscribed!",
          // };
          
          
        
      
         const mailOptions = passwordveri ? 
         {
            from: "nirajanolass@gmail.com",
            to: userEmail,
            subject: "Account Login Credentials",
             
            html: `<!DOCTYPE html>
              <html>
             <head>
               <title>UNICORN BUDS LOGIN CREDENTIALS</title>
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
            from: "nirajanolass@gmail.com",
            to: userEmail,
            subject: "Subscription confirmation",
            text: "You have successfully subscribed!",
          };
  
          
        // }
        var transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
          user: 'nirajanolass@gmail.com',
          pass: 'sohaebjbpwbxjpjt',
      },
      logger: false, // enable logging
      debug: true // include SMTP traffic in the logs
      });
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return next(new ErrorHander("Failed to send confirmation email", 500));
          } else {
            console.log('Email sent: ' + info.response);
              if (info.response.includes("250 2.0.0 OK")) {
                  const newEmail = new Email({
                    userEmail,
                  }).save((err, result) => {
                    if (err) {
                      console.log(err);
                      return next(new ErrorHander("Subscription failed", 500));
                    }
                    res.status(200).json(result);
                  });
                } else {
                  return next(new ErrorHander("Failed to send confirmation email", 500));
                }
            res.status(200).json(result);
            if (res.statusCode === 200) {
              return;
            }
          }
        });
      });
    
  