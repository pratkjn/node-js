const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// filtering routes on the basis of first parameter (i.e. /admin)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);