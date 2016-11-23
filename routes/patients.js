var express = require('express')
var router = express.Router()
var getPts = require('../db/functions').getPts
var getPatientById = require('../db/functions').getPatientById
var insertPatients = require('../db/functions').insertPatients
var getConsultants = require('../db/functions').getConsultants
var getPtsByConsultant = require('../db/functions').getConsultants


// gets a list of all the pts
router.get('/', function (req, res) {
  Promise.all([getPts(), getConsultants()])//Beware this conflicts id in different table so that now the patient id no longer represents it's true id.
    .then(function (values) {
      res.render('patients', { patients: values[0], consultants: values[1]})
    })
    .catch(function (error) {
      console.log(error)
    })
})

router.get('/:consultant', function (req, res) {
  Promise.all([getPts(), getConsultants()])
    .then(function (values) {
      var filteredPts = values[0].filter((ptData) => {
        if (req.params.consultant == 'All') return true
        return ptData.clastName == req.params.consultant
      })
      res.render('patients', {patients: filteredPts, consultants: values[1]})
    })
    .catch((error) => console.log(error))
})

module.exports = router
