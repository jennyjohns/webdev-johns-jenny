var mongoose = require('mongoose');
var db = mongoose.connect('mongod://localhost/cs5610', );

module.exports = db;
