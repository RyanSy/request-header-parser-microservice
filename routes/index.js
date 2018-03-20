var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

router.get('/api', function(req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

module.exports = router;
