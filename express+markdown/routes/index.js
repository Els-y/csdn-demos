var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('markdown/README.md', function(err, data) {
    var html = marked(data.toString());
    res.render('index', {mdContent: html});
  });
});

module.exports = router;
