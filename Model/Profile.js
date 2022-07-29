const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dateOfBirth: String,
  bio: String,
});

module.exports = mongoose.model("Profile", ProfileSchema);
