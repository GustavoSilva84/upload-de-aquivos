const app = require('./app.js');

app.listen(8282, (error) => {
    if(error) return console.log(`\n\n ${error} \n\n`);
    console.log(`\nServidor iniciado\n`);
})