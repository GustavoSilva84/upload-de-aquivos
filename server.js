const app = require('./app.js');

app.listen(process.env.PORT || 8181, (error) => {
    if(error) return console.log(`\n\n ${error} \n\n`);
    console.log(`\nServidor iniciado\n`);
})