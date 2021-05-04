const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Below is the parsing the request body section
app.use(bodyParser.urlencoded({ extended: false }));

//Below are the routing sections

app.use('/add-product', (req, res, next) => {
    res.send('<form action="product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.title);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome! Hello from Express</h1>');
});

app.listen(3000);