var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts
var getInPatients = require('../db/functions').getInPatients

// get a list of all the inpatients
router.get('/', function (req, res) {
  getInPatients()
    .then(function (ptsFromDB) {
        console.log(ptsFromDB);
        res.render('moving', { patients: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
  })

module.exports = router
