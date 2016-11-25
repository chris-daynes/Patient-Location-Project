var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts

router.get('/', function(req, res) {
  getPts()
    .then(function(data) {
      res.json({patients: data})
    })
    .catch((err) => console.log(err))
})

module.exports = router
