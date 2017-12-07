var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);
var PageModel = require('../page/page.model.server');

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.sortingWidgets = sortingWidgets;
WidgetModel.updateOneWidget = updateOneWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget) {
  console.log('IN MODEL', widget);
  var newWidget = null;
  return WidgetModel
    .create(widget)
    .then(function (widget) {
      newWidget = widget;
      console.log('NEW IN MODEL', newWidget);
      return PageModel
        .findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
}

function findAllWidgetsForPage(pageId) {
  return PageModel
    .findPageById(pageId);
}

function findWidgetById(pageId, widgetId) {
  return PageModel
    .findPageById(pageId);
    // .widgets
    // .find(widget => widget._id === widgetId);


// console.log('PAGEID IN MODEL',pageId);
// var pageWidgets = null;
// return PageModel.findPageById(pageId)
//   .then(function (page) {
//     console.log('HELLO FROM MODEL', page.widgets);
//     pageWidgets = page.widgets;
//     for(var i = 0; i < pageWidgets.length; i++) {
//       if(pageWidgets[i]._id === widgetId) {
//         return pageWidgets[i];
//       }
//     }
//   });

// return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  var pageWidgets = null;
  var wdgt = null;
  var i = null;
  return PageModel
    .findPageById(widget.pageId)
    .then(function (page) {
      pageWidgets = page.widgets;
      return WidgetModel
        .findWidgetById(widgetId)
        .then(function (wid) {
          wdgt = wid;
          i = pageWidgets.indexOf(wid);
          pageWidgets.splice(i, 1, widget);
          return WidgetModel
            .deleteOne({_id: widgetId})
            .then(function (widgets) {
              return WidgetModel
                .create(widget)
                .then(function (w) {
                  return page.save();
                });
            });
        });
    });
}

function updateOneWidget(widget) {
  return WidgetModel.insert(widget);
}

function deleteWidget(widgetId) {
  var wdgt1 = null;
  var pageId = null;
  var i = null;
  return WidgetModel.findOne({_id: widgetId})
    .then(function (widget) {
      wdgt1 = widget;
      pageId = widget.pageId;
      WidgetModel.deleteOne({_id: widgetId})
        .then(function (widgets) {
          PageModel
            .findPageById(pageId)
            .then(function (page) {
              i = page.widgets.indexOf(wdgt1);
              page.widgets.splice(i, 1);
              return page.save();
            });
        });
    });
}

function sortingWidgets(pageId, start, end) {
  var pageWidgets = null;
  var wdgt = null;
  return WidgetModel
    .findAllWidgetsForPage(pageId)
    .then(function (page) {
      pageWidgets = page.widgets;
      wdgt = pageWidgets[start];
      pageWidgets.splice(start, 1);
      pageWidgets.splice(end, 0, wdgt);
      return PageModel
        .findPageById(pageId)
        .then(function (page) {
          page.widgets = pageWidgets;
          return page.save();
        });
    });
}
