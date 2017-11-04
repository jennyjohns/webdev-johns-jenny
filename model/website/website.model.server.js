var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', websiteSchema);
var UserModel = require('../user/user.model.server');
WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesByUser = findWebsiteByUser;

module.exports = WebsiteModel;

function createWebsite(website) {
  var newWebsite = null;
  return WebsiteModel
    .create(website)
    .then(function (website) {
      newWebsite = website;
      UserModel
        .findUserById(newWebsite.developerId)
        .then(function (user) {
          user.websites.push(newWebsite);
          return user.save();
        })
    });
}

function findWebsiteByUser(userId) {
  return WebsiteModel
    .find({developerId: userId})
    .populate('developerId')
    .exec();
}
