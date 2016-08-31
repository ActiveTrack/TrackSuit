var db = require('./config');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('index.html');
  });
}