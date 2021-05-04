const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

//  /admin/add-product => GET request
router.get('/add-product', (req, res, next) => {
    // res.send(
    //     '<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>'
    // );
    res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html'));

    // or
    // res.send(
    //     '<form action="add-product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>'
    // );
});

//  /admin/add-product => POST request
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;