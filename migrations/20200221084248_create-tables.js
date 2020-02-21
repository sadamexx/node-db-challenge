
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.varchar('name', 128)
            .notNullable();
        tbl.varchar('description', 256)   
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.varchar('name', 128)
            .notNullable();
        tbl.varchar('description', 256);    
    })
    .createTable('proj_res', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');        
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('task_number')
            .notNullable();
        tbl.varchar('description', 128)
            .notNullable();
        tbl.varchar('notes', 256)
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};//ends exports

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('proj_res')
        .dropTableIfExists('resources')
        .dropTableIfExists("projects");
};
