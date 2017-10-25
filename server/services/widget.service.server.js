module.exports = function (app) {
  app.get("/api/widget", findAllWidgets);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.post("/api/page/:pid/widget", createWidget);
  app.put("/api/widget/:wgid", updateWidget);
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
    widgetList = [];
    for (i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        widgetList.push(widgets[i]);
      }
    }
    res.json(widgetList);
  }

  function findWidgetById(req, res) {
    var wgId = req.params['wgid'];
    var widget = widgets.find(function (widget) {
      return widget._id === wgId;
    })
    res.json(widget);
  }

  function createWidget(req, res) {
    var widget = req.body;
    console.log(widget);
    widgets.push(widget);
    res.json(widget);
  }

  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var updatedWidget = req.body;
    var widget = widgets.find(function (widget) {
      return widget._id === widgetId;
    });
    var i = widgets.indexOf(widget);

    widgets[i] = updatedWidget;
    res.json(updatedWidget);
  }
};
