var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cs5610', {useMongoClient: true});

module.exports = db;
