module.exports = function (app) {

  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../dist/assets/uploads'});
  var widgetModel = require('../../model/widget/widget.model.server');
  var pageModel = require('../../model/page/page.model.server');

  app.get("/api/widget", findAllWidgets);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/page/:pid/widget/:wgid", findWidgetById);
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
      .then(function (page) {
        res.json(page.widgets);
      });
  }

  function findWidgetById(req, res) {
    var pageId = req.params['pid'];
    var wgId = req.params['wgid'];
    var pageWidgets = null;
    // var pageWidgets = null;
    // pageModel
    //   .findPageById(pageId)
    //   .then(function (page) {
    //     pageWidgets = page.widgets;
    //     for (i = 0; i < pageWidgets.length; i++) {
    //       if (pageWidgets[i]._id === wgId) {
    //         res.json(pageWidgets[i]);
    //       }
    //     }
    //   });
    widgetModel
      .findWidgetById(pageId, wgId)
      .then(function (page) {
        // console.log(wgId);
        // console.log(page.widgets);
        res.json(findSameId(wgId, page.widgets));
        // pageWidgets = page.widgets;
        // console.log('IN SERVER', pageWidgets);
        // for(let i = 0; i < pageWidgets.length; i++) {
        //   console.log('PAGEWIDGET ID', pageWidgets._id[i]);
        //   console.log('WIDGETID', wgId);
        //   if(pageWidgets[i]._id === wgId) {
        //     console.log('FOUND THE WIDGET', pageWidgets[i]);
        //     res.json(pageWidgets[i]);
        //     return;
        //   }
        // }
       // res.json(widget);
      });
  }
  function findSameId(id, arr) {
    for (var i = 0; i < arr.length; i++) {
      // console.log(arr.length);
      // console.log('ARR', typeof (arr[i]._id.toString()), 'ID', typeof (id));
      // console.log(arr[i]._id.toString() === id);
      if(arr[i]._id.toString() === id) {
        return arr[i];
      }
    }
  }
  function createWidget(req, res) {
    var widget = req.body;
    //console.log('WIDGET IN SERVER', widget);

    var pageId = req.params['pid'];
    widget.pageId = pageId;
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
        //console.log('SECOND', widget);
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
    console.log('WIDTH', req.body.width);
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
      .findWidgetById(pageId, widgetId)
      .then(function (page) {
        widget1 = findSameId(widgetId, page.widgets);
        widget1['url'] = '/assets/uploads/' + filename;
        widget1['width'] = width;
        widget1['size'] = size;
        widget1.save();
        console.log('CREATED WIDGET', widget1);
        widgetModel
          .updateWidget(widgetId, widget1)
          .then(function (wdgt) {
            var callbackUrl = '/user/website/' + websiteId + '/page/' + pageId + '/widget';
            res.redirect(callbackUrl);
          });
      });

  }
};
