var express = require('express')
var router = express.Router()
var pts = require('../db/patients.js')

// gets a list of all the pts
router.get('/', function (req, res) {
  cats.getPts()
    .then(function (ptsFromDB) {
      res.render('patients', { pts: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
})
