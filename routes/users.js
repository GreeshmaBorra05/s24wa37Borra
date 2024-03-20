var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();
var product = 1 ;
var factor = 1;
 
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product = product*factor;
  res.send(`The Product with factor is: ${product}`);
});
 
module.exports = router;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
