var express = require('express');
var router = express.Router();

var movies = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { movies: movies});
});

router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add', function(req, res, next) {
  var title = req.body.title;
  var description = req.body.description
  var movie = {title,description}

  movies.push(movie);

  res.redirect('/');
});

module.exports = router;
