
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('patients').insert({id: 1, firstName: 'Donald', lastName: 'Trump', NHI: 'ABC1234'}),
        knex('patients').insert({id: 2, firstName: 'Hillary', lastName: 'Clinton', NHI: 'DEF5678'}),
        knex('patients').insert({id: 3, firstName: 'Bernie', lastName: 'Sanders', NHI: 'GHI9012'})
      ])
    })
}
