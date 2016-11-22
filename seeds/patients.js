var createPatients = require('../data/patient-objects')
var patients = createPatients()


console.log('This is the patients Object ', patients);
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('patients').insert(patients)

      ])
    })
}
