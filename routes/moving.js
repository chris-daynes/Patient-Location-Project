var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts

// get a list of all the inpatients
router.get('/', function (req, res) {
  getPts()
    .then(function (ptsFromDB) {
      res.render('moving', { patients: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
  })

module.exports = router
