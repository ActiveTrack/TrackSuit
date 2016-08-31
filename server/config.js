var mongoose = require('mongoose');

var mongodbUri = 'mongodb://tracksuit:tracksuit@ds019866.mlab.com:19866/newtracksuit';          
mongoose.connect(mongodbUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db start');
});

module.exports = db;