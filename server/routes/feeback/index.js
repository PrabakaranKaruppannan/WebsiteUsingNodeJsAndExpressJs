const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (request, response, next) => {
        response.send('Feedback Page');
    });

    router.post('/', (request, response, next) => {
        response.send('Feedback sent');
    });
    
    return router;
}