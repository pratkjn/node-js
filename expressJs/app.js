// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in 1st middleware');
    next(); //Allows the request to continue to the next middlware in line
});

app.use((req, res, next) => {
    console.log('in 2nd middleware');
    res.send(`<html><h1>Hello I'm Second Middleware</h1></html>`);
});

app.listen(3000);
//below code is also same
// const server = http.createServer(app);
// server.listen(3000);