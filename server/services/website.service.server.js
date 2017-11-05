module.exports = function (app) {
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.get("/api/website", findWebsites);
  app.post("/api/user/:uid/website", createWebsite);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);
  var websiteModel = require('../../model/website/website.model.server');

  websites = [
    { _id: '123', name: 'Facebook',    developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter',     developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo',     developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go',          developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers',    developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess',       developerId: '234', description: 'Lorem' }

  ];

  function findWebsites(req, res) {
    res.json(websites)
  }
  function findAllWebsitesForUser(req, res) {
    var userId = req.params['uid'];
    websiteModel
      .findWebsitesByUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findWebsiteById(req, res) {
    var webId = req.params['wid'];
    websiteModel
      .findWebsiteById(webId)
      .then(function (website) {
        res.json(website);
      });
  }

  function createWebsite(req, res) {
    var userId = req.params['uid'];
    var website = req.body;
    website.developerId = userId;
    websiteModel
      .createWebsite(website)
      .then(function (website) {
        websiteModel
          .findWebsitesByUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
      });
  }

  function updateWebsite(req, res) {
    var webId = req.params['wid'];
    var updatedWebsite = req.body;
    websiteModel
      .updateWebsite(webId, updatedWebsite)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteWebsite(req, res) {
    var webId = req.params['wid'];
    websiteModel
      .deleteWebsite(webId)
      .then(function (websites) {
        res.json(websites);
      });
  }
};
