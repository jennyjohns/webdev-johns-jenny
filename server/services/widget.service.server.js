
module.exports = function (app) {

  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads'});
  var widgetModel = require('../../model/widget/widget.model.server');
  var pageModel = require('../../model/page/page.model.server');

  app.get("/api/widget", findAllWidgets);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.post("/api/page/:pid/widget", createWidget);
  app.put("/api/widget/:wgid", updateWidget);
  app.put("/api/page/:pid/widget", sortingWidgets);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.post("/api/upload", upload.single('myFile'), uploadImage);

  function findAllWidgets(req, res) {
    res.json(widgets);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pid'];
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function findWidgetById(req, res) {
    var wgId = req.params['wgid'];
    widgetModel
      .findWidgetById(wgId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params['pid'];
    widget._page = pageId;
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
        widgetModel
          .findAllWidgetsForPage(pageId)
          .then(function (widgets) {
            res.json(widgets);
          });
      });
  }

  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var updatedWidget = req.body;
    widgetModel
      .updateWidget(widgetId, updatedWidget)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['wgid'];
    widgetModel
      .deleteWidget(widgetId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function sortingWidgets(req, res) {
    var pageId = req.params['pid'];
    var index1 = req.query['initial'];
    var index2 = req.query['final'];
    widgetModel
      .sortingWidgets(pageId, index1, index2)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname;
    var filename = myFile.filename;
    var path = myFile.path;
    var destination = myFile.destination;
    var size = myFile.size;
    var mimetype = myFile.mimetype;
    var widget1 = null;
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        widget1 = widget;
        widget1['url'] = '/assets/uploads/' + filename;
        widget1['width'] = width;
        widget1['size'] = size;
        widgetModel
          .updateWidget(widgetId, widget1)
          .then(function (wgdt) {
            var callbackUrl =  '/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
            res.redirect(callbackUrl);
          });
      });

  }
};
