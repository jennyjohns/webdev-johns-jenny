var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', websiteSchema);
var UserModel = require('../user/user.model.server');

WebsiteModel.createWebsite = createWebsite;
WebsiteModel.findWebsitesByUser = findWebsiteByUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

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
        });
    });
}

function findWebsiteByUser(userId) {
  return WebsiteModel
    .find({developerId: userId})
    .populate('developerId')
    .exec();
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  var website1 = null;
  var userId = null;
  var i = null;
  return WebsiteModel.findOne({_id: websiteId})
    .then(function (website) {
      website1 = website;
      userId = website.developerId;
      WebsiteModel
        .deleteOne({_id: websiteId})
        .then(function (websites) {
          UserModel
            .findUserById(userId)
            .then(function (user) {
              i = user.websites.indexOf(website1);
              user.websites.splice(i, 1);
              return user.save();
            });
        });
    });
}
