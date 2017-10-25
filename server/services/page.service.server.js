module.exports = function (app) {
  app.get("/api/page", findAllPages);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.post("/api/website/:wid/page", createPage);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);
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
    pages.push(page);
    res.json(page);
  }

  function updatePage(req, res) {
    var pageId = req.params['pid'];
    var updatedPage = req.body;
    var page = pages.find(function (page) {
      return page._id === pageId;
    });
    var i = pages.indexOf(page);
    pages[i] = updatedPage;
    res.json(updatedPage);
  }

  function deletePage(req, res) {
    var pageId = req.params['pid'];
    var page = this.pages.find(function (page) {
      return page._id === pageId;
    })
    var i = pages.indexOf(page);
    pages.splice(i, 1);
    res.json(pages);
  }
};
