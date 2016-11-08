
exports.up = function (knex, Promise) {
  console.log('The location table has been created')
  return knex.schema.createTableIfNotExists('locations', function (table) {
    table.increments('id')
    table.string('location')
  })
}

exports.down = function (knex, Promise) {
  console.log('The location table has been dropped')
  return knex.schema.dropTableIfExists('locations')
}
