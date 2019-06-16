var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
    //res.send("Print Data");
  });


router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
  //res.send("Print Data");
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
    //res.send("Print Data");
  });
      
module.exports = router;
