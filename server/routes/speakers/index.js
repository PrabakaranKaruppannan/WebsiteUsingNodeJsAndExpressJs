const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (request, response, next) => {
        response.send('Speakers Page');
    });

    router.get('/:name', (request, response, next) => {
        response.send(`Speaker details Page of ${ request.params.name }`);
    });
    
    return router;
}