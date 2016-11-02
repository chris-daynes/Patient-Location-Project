var express = require('express')
var router = express.Router()
var pts = require('../db/patients.js')

// gets a list of all the pts
router.get('/', function (req, res) {
  pts.getPts()
    .then(function (ptsFromDB) {
      res.render('patients', { patients: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router
