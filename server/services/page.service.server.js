module.exports = function (app) {
  app.get("/api/page", findAllPages);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.post("/api/website/:wid/page", createPage);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  var pageModel = require('../../model/page/page.model.server');

  function findAllPages(req, res) {
    res.json(pages);
  }

  function findAllPagesForWebsite(req, res) {
    var webId = req.params['wid'];
    pageModel
      .findAllPagesForWebsite(webId)
      .then(function (pages) {
        res.json(pages);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params['pid'];
    pageModel
      .findPageById(pageId)
      .then(function (page) {
        res.json(page);
      });
  }

  function createPage(req, res) {
    var page = req.body;
    var webId = req.params['wid'];
    page._website = webId;
    pageModel
      .createPage(webId, page)
      .then(function (page) {
        pageModel
          .findAllPagesForWebsite(webId)
          .then(function (pages) {
            res.json(pages);
          });
      });
  }

  function updatePage(req, res) {
    var pageId = req.params['pid'];
    var updatedPage = req.body;
    pageModel
      .updatePage(pageId, updatedPage)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePage(req, res) {
    var pageId = req.params['pid'];
    pageModel
      .deletePage(pageId)
      .then(function (pages) {
        res.json(pages);
      });
  }
};
