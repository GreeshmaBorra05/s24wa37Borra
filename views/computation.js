var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let x = req.query.x;

  if (!x || isNaN(parseFloat(x))) {
    x = Math.random() * 100;
  } else {
    x = parseFloat(x);
  }

  let y = Math.cos(x);
 
  res.send(`cos of ${x} is ${y}`);
});

module.exports = router;
