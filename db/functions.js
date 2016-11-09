var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getPts
}

function getPts () {
   return knex.raw('SELECT patients.*, consultantList.*, locations.* from patients  JOIN locations ON  locations.id = patients.location_id JOIN consultantList ON patients.consultant_id = consultantList.id')
// return knex('patients')
//   .join('consultantList', 'patients.consultant_id', '=', 'consultantList.id')
//   .join('locations', 'patients.location_id', '=', 'locations.id')
//   .select()
}
