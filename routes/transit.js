var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts


router.get('/', function (req, res) {
  getPts()
    .then(function (ptsFromDB) {
      var singlePatient = ptsFromDB.filter( function (patient){
        return patient.NHI == req.query.NHI
      })
      if (singlePatient.length === 0) {
        res.render('errorPage', {message: 'Non existant NHI'})
      }
      console.log('This is the single patient', singlePatient);
      res.render('transit', singlePatient[0])
    })
})

module.exports = router
