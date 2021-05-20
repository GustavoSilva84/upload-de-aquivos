const express = require('express');
const router = require('./router.js');
const path =  require('path');
const cors = require('cors');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../', './dados')))
app.use(express.urlencoded({ extended: false }))
app.use(router);




app.use((req, res, next) => {

    res.send(`
        <h1> Pagina não encontrada 404 </h1>
        <ul>
            <li> <a href="/form"> Form </a> </li>
            <li> <a href="/posts"> Pots </a> </li>
        </ul>
    `)

})


module.exports = app; 