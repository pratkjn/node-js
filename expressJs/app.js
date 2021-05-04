const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// filtering routes on the basis of first parameter (i.e. /admin)
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(3000);