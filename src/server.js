import app from './app.js'

app.listen(process.env.PORT || 8181, (erro) => {

    if(erro) return console.log(`Erro: ${erro}`);
    console.log(`Servidor iniciado`);

});