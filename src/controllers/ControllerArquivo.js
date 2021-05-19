class ControllerArquivo {

    Mostrar(req, res) {   
        res.render('index');
    } 

    Criar(req, res) {
        res.send('Arquivo enviado com sucesso');
    }  

}

 
module.exports = new ControllerArquivo; 