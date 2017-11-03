var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ( {
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: String, //@TODO CHANGE THIS!
  dateCreated: Date,
}, {collection: 'user'});

module.exports = UserSchema;
