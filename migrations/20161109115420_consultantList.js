
exports.up = function (knex, Promise) {
  console.log('The consultantList table has been created')
  return knex.schema.createTableIfNotExists('consultantList', function (table) {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  console.log('The consultantList table has been dropped')
  return knex.schema.dropTableIfExists('consultantList')
}
