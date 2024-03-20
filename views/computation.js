var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Generate a random value for x
  let x = Math.random() * 100;
  
  // Calculate the cosine of x
  let y = Math.cos(x);
 
  res.send(`cos of ${x} is ${y}`);
});
 
module.exports = router;
