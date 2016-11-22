//Need to make 100 pts to put into my Db.
// Needs the fields
// firstName
// lastName
// NHI
// location_id There are at present 6 of these
// consultant_id At present there are 6 of these


Inserting into knex is easy with knex('table_name').insert({object_to_insert})
So need 100 objects of the form
 {
   firstName:
   lastName:
   NHI:
   location_id 1-6
   consultant_id 1-6
 }
