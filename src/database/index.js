const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest2');
mongoose.Promise = global.Promise;

module.exports = mongoose;