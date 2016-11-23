var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts
var getPatientById = require('../db/functions').getPatientById
var insertPatients = require('../db/functions').insertPatients
var getConsultants = require('../db/functions').getConsultants


// gets a list of all the pts
router.get('/', function (req, res) {
  Promise.all([getPts(), getConsultants()])//Beware this conflicts id in different table so that now the patient id no longer represents it's true id.
    .then(function (values) {

      console.log(values)
      res.render('patients', { patients: values[0], consultants: values[1]})
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router
