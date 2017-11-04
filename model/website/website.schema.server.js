var mongoose = require('mongoose');
var PageSchema = require('../page/page.schema.server');
var UserSchema = require('../user/user.schema.server');
var WebsiteSchema = mongoose.Schema ({
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  pages: [PageSchema], //@TODO CHANGE THIS
  dateCreated: Date,
}, {collection: 'website'});

module.exports = WebsiteSchema;
