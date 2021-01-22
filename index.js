// start your server here
const server = require('./api/server');

const PORT = process.env.PORT || 4444;

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}...`);
});