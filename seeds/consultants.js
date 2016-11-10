
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('consultantList').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('consultantList').insert({id: 1, cfirstName: 'Gregory', clastName: 'House'}),
        knex('consultantList').insert({id: 2, cfirstName: 'Hawkeye', clastName: 'Pierce'}),
        knex('consultantList').insert({id: 3, cfirstName: 'John', clastName: 'Dorian'}),
        knex('consultantList').insert({id: 4, cfirstName: 'Leonard', clastName: 'McCoy'}),
        knex('consultantList').insert({id: 5, cfirstName: 'Perry', clastName: 'Cox'}),
        knex('consultantList').insert({id: 6, cfirstName: 'John', clastName: 'Carter'})
      ])
    })
}
