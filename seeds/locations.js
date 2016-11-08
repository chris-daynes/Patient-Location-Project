
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('locations').insert({id: 1, location: 'Emergenecy Department'}),
        knex('locations').insert({id: 2, location: 'Operating Theatre'}),
        knex('locations').insert({id: 3, location: 'Intensive Care'}),
        knex('locations').insert({id: 4, location: 'Ward 29'}),
        knex('locations').insert({id: 5, location: 'ward 28'}),
        knex('locations').insert({id: 6, location: 'Womens Surgical Unit'})
      ])
    })
}
