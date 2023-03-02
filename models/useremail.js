const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // for google login
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  googleID: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },
  // for local login
  email: {
    type: String,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 1024,
  },
});
module.exports = mongoose.model("users", userSchema);
