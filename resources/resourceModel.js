const db = require('../data/db-config.js');

module.exports = {
    addRes,
    findAll,
    findResourceById,
    findProjects
};

//add a new resource to database
function addRes(resource){
    return db('resources')
    .insert(resource, 'id')
};

//find all resources
function findAll(){
    return db('resources');
};

//find resource by id
function findResourceById(id){
    return db('resources')    
    .where({ id })
    .first();
};


//find all projects containing a resource
function findProjects(r_id){
    return db('recipe_ingredients')
    .join('recipes', "recipes.id", "recipe_ingredients.recipe_id")
    .select("recipe.name")
    .join('ingredients', "ingredients.id", "recipe_ingredients.ingredient_id")
    .select('ingredients.name')
    .where({ id})
}

