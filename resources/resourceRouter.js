const express = require('express');
const resources = require('./resourceModel.js');

const router = express.Router();

//C== create a new resource
router.post('/', (req, res) => {
    const newRes = req.body;

    resources.addRes(newRes)
    .then(r => {
        res.status(201).json(r)
    })
    .catch(error => {
        res.status(500).json({ message: "Unable to process request"});
    });
});


//R===get all resources in database
router.get('/', (req, res) => {
    resources.findAll()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        res.status(500).json({message: "Failed to get resources"});
    });
});

//R===get resource by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    resources.findResourceById(id)
    .then(resource => {
        if(resource){
            res.status(200).json(resource);
        } else {
            res.status(404).json({ message: "Could not find resource by ID"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Could not retrieve data"})
    });
});

//R===get recipes by ingredient id
router.get('/:id/recipes', (req, res) => {
    const id = req.params.id;

    ingredients.findRecipes(id)
    .then(ing =>{
        if(ing.length){
            res.status(200).json(ing)
        } else {
            res.status(404).json({message: "Failed to find recipes using this ingredient"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Error occurred while retrieving data"});
    });
});

module.exports = router;