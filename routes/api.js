var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'test API functionality'});
});


module.exports = router;
