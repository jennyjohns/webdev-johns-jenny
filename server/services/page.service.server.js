module.exports = function (app) {
  app.get("/api/page", findAllPages);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.post("/api/website/:wid/page", createPage);
  pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' }
  ];

  function findAllPages(req, res) {
    res.json(pages);
  }
  function findAllPagesForWebsite(req, res) {
    var webId = req.params['wid'];
    pageList = [];
    for (i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === webId) {
        pageList.push(pages[i]);
      }
    }
    res.json(pageList);
  }
  function findPageById(req, res) {
    var pageId = req.params['pid'];
    var page = pages.find(function (page) {
      return page._id === pageId;
    });
    res.json(page);
  }
  function createPage(req, res) {
    var page = req.body;
    console.log(page);
    pages.push(page);
    res.json(page);
  }
};
