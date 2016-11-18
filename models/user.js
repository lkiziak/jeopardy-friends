// 1. Require Mongoose
var mongoose = require('mongoose');

// 2. Define a schema for the model
var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  googleId: String,
  created: { type: Date, default: Date.now }
});

// 4. Create the model from the schema
var User = mongoose.model('User', userSchema)

// 5. Export the model
module.exports = mongoose.model('User', userSchema);
