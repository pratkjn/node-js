const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This code will always run');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In add-product middleware');
    res.send('<h1>Welcome! Hello from add-product</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In 1st middleware');
    res.send('<h1>Welcome! Hello from Express</h1>');
});

app.listen(3000);