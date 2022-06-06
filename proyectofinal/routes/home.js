var express = require('express');
const { notisloged } = require('../helpers/authenticated');
var router = express.Router();

/* GET home page. */
router.get('/',  notisloged , function(req, res, next) {
  res.render('inicio');
});

module.exports = router;
