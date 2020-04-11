exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl=>{
        tbl.increments();
        tbl.int('VIN')
            .unique()
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.int('mileage')
            .notNullable();
        tbl.text('transmission type');
        tbl.text('title status');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};