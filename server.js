const express = require('express');
const projectRouter = require('./projects/projectRouter.js');
const resourceRouter = require('./resources/resourceRouter.js');

const server = express();
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

server.get('/', (req, res) => {
    res.send('<h2>Wanna see a SPRING BEING CRUSHED? Continue!</h2>')
})


module.exports = server;