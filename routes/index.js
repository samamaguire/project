var express = require('express');
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5 POINT INTERACTIVE' });
});

module.exports = router;


