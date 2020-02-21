const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    findResources,
    findTasks,
    remove,
    update
};

//adds a project
function add(project){
    return db('projects')
    .insert(project, 'id')
};

//finds all projects
function find(){
    return db('projects');
};

//finds project by id
function findById(id){    
    return db('projects')
    .where({ id })
    .first();
};

//finds all tasks of a project by projectID
function findTasks(id){
    return
};

//finds all resources of a project by projectID
function findResources(id){
    return
};

//deletes a project by id
function remove(id){
    return db('projects')
    .where({ id })
    .del();
};

//updates a project by id
function update(changes, id){
    return db('projects')
    .where ({ id })
    .update(changes);
};