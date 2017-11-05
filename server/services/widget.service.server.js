
module.exports = function (app) {

  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads'});
  var widgetModel = require('../../model/widget/widget.model.server');

  app.get("/api/widget", findAllWidgets);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.post("/api/page/:pid/widget", createWidget);
  app.put("/api/widget/:wgid", updateWidget);
  app.put("/api/page/:pid/widget", sortingWidgets);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.post("/api/upload", upload.single('myFile'), uploadImage);


  widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'http://lorempixel.com/1200/600/'
    },
    {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://youtu.be/AM2Ivdi9c4E'
    },
    {_id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  ];

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
    var index1 = req.query['initial'];
    var index2 = req.query['final'];

    var wid1 = widgets[index1];
    var wid2 = widgets[index2];

    widgets[index2] = wid1;
    widgets[index1] = wid2;

    res.json(widgets);
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

    widget = getWidgetById(widgetId);
    widget.url = '/assets/uploads/' + filename;

     var callbackUrl = '/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
     res.redirect(callbackUrl);
  }

  function getWidgetById(widgetId) {
    var widget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    return widget;
  }
};
