const express = require('express');
const projects = require('./projectModel.js');

const router = express.Router();

//C  ==creates a new project
router.post('/', (req, res) => {
    const newProject = req.body;

    projects.add(newProject)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({message: "Unable to create new project"})
    });
});

//R ==gets all projects
router.get('/', (req, res) => {
    projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error =>{
        res.status(500).json({message: "Unable to retrieve projects"});
    });
});

//R ==get project by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    projects.findById(id)
    .then(project => {
        if(project){
            res.status(201).json(project);
        } else {
            res.status(404).json({message: "Unable to find project by specific ID"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Unable to retrieve data"});
    });
});

//R ==get tasks by project id
router.get('/id/tasks', (req, res) => {

});

//U ==update projects by id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    projects.findById(id)
    .then(project => {
        if(project){
            projects.update(changes, id)
            .then(pro => {
                res.status(200).json(pro);
            });
        } else {
            res.status(404).json({ message: "Failed to find project with specified ID"});
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Failed to update project"});
    });
});

//D == delete project by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    projects.findById(id)
    .then(project => {
        if(project){
            projects.remove(id)
            .then(pro => {
                res.status(200).json({message: "Your project was successfully removed"});
            });
        } else {
            res.status(400).json({ message: "Unable to locate project with specified ID"});
        }
    })
    .catch(error => {
        res.status(500).json({message: "Error in processing. Project not removed"});
    });
});

module.exports = router;