var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getPts,
  getPatientsLocation,
  getPatientsConsultant,
  logError,
  closeDB
}

function getPts () {
  return knex('patients')
}

function getPatientsLocation() {
  return knex.select('locations.location').from('patients')
    .join('locations', 'patients.location_id', '=', 'locations.id')
}

function getPatientsConsultant () {
  return knex.select('consultants.name').from('patients')
    .join('consultants', 'patients.consultant_id', '=', 'consultants.id')
}

function logError (err) {
  console.log('Man we Blew up!:', err)
}

function closeDB () {
  knex.destroy()
}
