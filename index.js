const server = require('./server.js');

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
    console.log(`Sprint Challenge being crushed on port ${Port}`);
});