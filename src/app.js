const express = require('express');
const router = require('./router.js');
const path =  require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../', './dados')))

app.use(express.urlencoded({ extended: false }))
app.use(router);

module.exports = app; 