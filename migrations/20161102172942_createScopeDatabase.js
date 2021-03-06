
exports.up = function (knex, Promise) {
  console.log('The patients table has been created')
  return knex.schema.createTableIfNotExists('patients', function (table) {
    table.increments('id')
    table.string('firstName')
    table.string('lastName')
    table.string('NHI')
    table.integer('location_id')
    table.integer('consultant_id')
  })
}

exports.down = function (knex, Promise) {
  console.log('The patients table has been dropped')
  return knex.schema.dropTableIfExists('patients')
}
