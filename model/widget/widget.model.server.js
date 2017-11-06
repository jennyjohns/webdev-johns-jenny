var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);
var PageModel =  require('../page/page.model.server');

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget) {
  var newWidget = null;
  return WidgetModel
    .create(widget)
    .then(function (widget) {
      newWidget = widget;
      PageModel
        .findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel
    .find({_page: pageId})
    .populate('_page')
    .exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  var wdgt1 = null;
  var pageId = null;
  var i = null;
  return WidgetModel.findOne({_id: widgetId})
    .then(function (widget) {
      wdgt1 = widget;
      pageId = widget._page;
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
  // var page1 = null;
  // var webId = null;
  // var i = null;
  // return PageModel.findOne({_id: pageId})
  //   .then(function (page) {
  //     page1 = page;
  //     webId = page._website;
  //     PageModel
  //       .deleteOne({_id: pageId})
  //       .then(function (pages) {
  //         WebsiteModel
  //           .findWebsiteById(webId)
  //           .then(function (website) {
  //             i = website.pages.indexOf(page1);
  //             website.pages.splice(i, 1);
  //             return website.save();
  //           });
  //       });
  //   });
}

function reorderWidget(pageId, start, end) {
  //return WidgetModel.
}
