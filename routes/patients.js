var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts

// gets a list of all the pts
router.get('/', function (req, res) {
  getPts()
    .then(function (ptsFromDB) {
      console.log(ptsFromDB)
      res.render('patients', { patients: ptsFromDB })
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router
