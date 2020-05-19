
exports.up = function(knex) {
    return knex.schema
        .createTable('roles', roles => {
            roles.increments()
            roles.string('name', 128)
                .notNullable()
                .unique()
        })
        .createTable('users', users => {
            users.increments()
            users.string('name', 128)
                .notNullable()
            users.string('username', 128)
                .notNullable()
                .unique()
                .index()
            users.string('password', 256)
                .notNullable()
            users.integer('role')
                .unsigned()
                .references('id')
                .inTable('roles')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles').dropTableIfExists('users')
};
