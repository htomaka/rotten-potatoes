var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reviews/index', { reviews: reviews});
});

router.get('/reviews/new', function(req, res, next) {
    res.render('reviews/new');
});

module.exports = router;
