module.exports = function (app) {
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);


  websites = [
    { _id: '123', name: 'Facebook',    developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Tweeter',     developerId: '456', description: 'Lorem' },
    { _id: '456', name: 'Gizmodo',     developerId: '456', description: 'Lorem' },
    { _id: '890', name: 'Go',          developerId: '123', description: 'Lorem' },
    { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
    { _id: '678', name: 'Checkers',    developerId: '123', description: 'Lorem' },
    { _id: '789', name: 'Chess',       developerId: '234', description: 'Lorem' }

  ];

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['uid'];
    var websiteList = [];
    for (i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        websiteList.push(websites[i]);
      }
    }
    res.json(websiteList);
  }

  function findWebsiteById(req, res) {
    var webId = req.params['wid'];
    var website = this.websites.find(function (website) {
      return website._id === webId;
    });
    res.json(website);
  }
};
