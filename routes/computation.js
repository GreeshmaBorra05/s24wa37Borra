var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let x = req.query.x;

  if (!x || isNaN(parseFloat(x))) {
    x = Math.random() * 100;
  } else {
    x = parseFloat(x);
  }

  let num1  = Math.random();
  let cosres = Math.cos(x);
  let sinh = Math.asinh(x);
  num1 = Math.min(Math.max(num1, -1), 1);
  let sinvalue = Math.asin(num1);
  res.send(`Math.cos applied to ${x} is ${cosres} <br>
  Math.asin applied to ${num1} is ${sinvalue} <br>
  Math.asinh applied to ${x} is ${sinh} <br>  
  `);
});

module.exports = router;
