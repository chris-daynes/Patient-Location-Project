
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('consultantList').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('consultantList').insert({id: 1, firstName: 'Chris', lastName: 'Daynes'}),
        knex('consultantList').insert({id: 2, firstName: 'Pravin', lastName: 'Kumar'}),
        knex('consultantList').insert({id: 3, firstName: 'Mike', lastName: 'Young'}),
        knex('consultantList').insert({id: 4, firstName: 'Richard', lastName: 'Coutts'}),
        knex('consultantList').insert({id: 5, firstName: 'Colin', lastName: 'Wilson'}),
        knex('consultantList').insert({id: 6, firstName: 'Bruce', lastName: 'Rhind'})
      ])
    })
}
