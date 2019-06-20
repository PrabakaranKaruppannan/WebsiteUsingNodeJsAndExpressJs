const express = require('express');
const router = express.Router();

const speakersRoutes = require('./speakers');
const feedbackRoutes =  require('./feeback');

module.exports = () => {
    router.get('/', (request, response, next) => {
        response.render('index');
    });
    
    router.use('/speakers', speakersRoutes());
    router.use('/feedback', feedbackRoutes());

    return router;
}