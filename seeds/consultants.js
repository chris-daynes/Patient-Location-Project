
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('consultantList').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('consultantList').insert({id: 1, name: 'Chris Daynes'}),
        knex('consultantList').insert({id: 2, name: 'Pravin Kumar'}),
        knex('consultantList').insert({id: 3, name: 'Mike Young'}),
        knex('consultantList').insert({id: 4, name: 'Richard Coutts'}),
        knex('consultantList').insert({id: 5, name: 'Colin Wilson'}),
        knex('consultantList').insert({id: 6, name: 'Bruce Rhind'})
      ])
    })
}
