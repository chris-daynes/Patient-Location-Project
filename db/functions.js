var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getPts,
  getPatientById,
  getInPatients
}

function getPts () {
return knex('patients')
  .join('consultantList', 'patients.consultant_id', '=', 'consultantList.id')
  .join('locations', 'patients.location_id', '=', 'locations.id')
  .select()
}

function getPatientById (NHI) {
  return knex('patients')
    .where('NHI', '=', NHI)
}

function getInPatients() {
  return knex('patients').where('inpatient', 1)
}
