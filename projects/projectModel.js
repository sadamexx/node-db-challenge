const db = require('../data/db-config.js');

module.exports = {
    add,
    addTask,
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

//adds a task to a project
function addTask(newTask){
    return db('tasks')
    .insert(newTask, 'id')
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
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.task_number', 'tasks.description as task_description', 'tasks.notes as task_note', 'tasks.completed', "projects.name as project_name", "projects.description as project_description")
    .where('project_id', id)
    .orderBy('task_number', 'asc')
};

//finds all resources of a project by projectID
function findResources(project_id){
    return db('resources')
    .join('proj_res as pr', "pr.resource_id", "resources.id")
    .select('resources.name',  'resources.id', 'pr.project_id')
    .where({project_id})
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