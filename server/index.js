const express = require('express');
const path = require('path');
const createError = require('http-errors');
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'));

app.use('/', routes());

app.use((request, response, next)  => {
    return next(createError(404, 'Not Found'));
});

app.use((error, request, response, next) => {
    response.locals.message = error.message;
    const status = error.status || 500;
    response.locals.status = status;
    response.locals.error = error;
    response.status(status);
    return response.render('error');
});

app.listen('3000');

module.export = app;