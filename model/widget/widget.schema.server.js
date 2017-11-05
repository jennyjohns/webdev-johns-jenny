var mongoose = require('mongoose');

var WidgetSchema = mongoose.Schema ( {
  _page: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  type: String,
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: Date
}, {collections: 'widget'});

module.exports = WidgetSchema;
// var PageSchema = mongoose.Schema ( {
//   _website: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
//   name: String,
//   title: String,
//   description: String,
//   widgets: [WidgetSchema],
//   dateCreated: Date
// }, {collection: 'page'});
//
// module.exports = PageSchema;
