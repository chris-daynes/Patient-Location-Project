var express = require('express')
var router = express.Router()
var getPatientList = require('../db/functions.js').getPts
var getPatientLocation = require('../db/functions.js').getPatientLocation

// gets a list of all the pts
router.get('/', function (req, res) {
  getPatientLocation(1)
    .then(data => console.log(data))


  getPatientList()
    .then(function (ptsFromDB) {
      res.render('patients', { patients: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router
