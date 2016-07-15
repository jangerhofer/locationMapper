var express = require('express');
var router = express.Router();
var singletons = require('../singletons')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', latitude : singletons.location.latitude, longitude : singletons.location.longitude });
});

router.post('/updateLoc', function(req, res, next) {
  singletons.location.latitude = req.body.latitude
  singletons.location.longitude = req.body.longitude;
  res.send(200);
})

module.exports = router;
