var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts


router.get('/', function (req, res) {
  getPts()
    .then(function (ptsFromDB) {
      let singlePatient = ptsFromDB.filter((patient) => {
        return patient.NHI == req.query.NHI
      })
      console.log('This is the single patient', singlePatient);
      res.render('transit', singlePatient[0])
    })
})

module.exports = router
