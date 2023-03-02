const express = require('express');
const SMTPPool = require('nodemailer/lib/smtp-pool');
const app = express();
const cors = require("cors");

const errorMiddleware = require("./middleware/error")

app.use(cors());
app.use(express.json())

// routes 
const user = require("./routes/userRoutes")

app.use("/api/v1" , user)

// middleware for error 
app.use(errorMiddleware)

module.exports = app