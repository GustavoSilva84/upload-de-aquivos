const express = require('express');
const router = require('./router.js');
const path =  require('path');

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(router);

module.exports = app; 