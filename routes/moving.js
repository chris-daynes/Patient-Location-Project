var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {

  console.log('This is the moving page!');
  res.render('moving', )
})

module.exports = router
