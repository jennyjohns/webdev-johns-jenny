var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var PageModel =  mongoose.model('PageModel', PageSchema);
var WebsiteModel = require('../website/website.model.server');

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(webId, page) {
  var newPage = null;
  return PageModel
    .create(page)
    .then(function (page) {
      newPage = page;
      WebsiteModel
        .findWebsiteById(webId)
        .then(function (website) {
          website.pages.push(newPage);
          console.log(website);
          return website.save();
        });
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel
    .find({_website: websiteId})
    .populate('_website')
    .exec();
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.deleteOne({_id: pageId});
}
