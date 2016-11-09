var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getPts,
  getPatientLocation
}

function getPts () {
  return knex('patients')
}

function getPatientLocation (patientId) {
  return knex.from('patients')
    .innerJoin('locations', 'patient.location_id', '=', 'location.id')
    .where('patient.id', '=', patientId)
}
