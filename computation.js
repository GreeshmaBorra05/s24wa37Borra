var express = require('express');
var router = express.Router();
let x = Math.random()*100;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let y = Math.cos(x);
 
res.send(`Sqrt of ${x} is ${y}`);
});
 
module.exports = router;