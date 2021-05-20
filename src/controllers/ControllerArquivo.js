const path = require('path')
const ModelPostagens = require('../model/ModelPostagens');

class ControllerArquivo {

    Form(req, res) {   
        res.render('form');
    } 

    async Criar(req, res) {

        if(req.file) {

            try {

                const dados = {
                    msg: req.body.titulo,
                    img: req.file.filename
                }

                await ModelPostagens.create(dados);
                res.send('criado com sucesso');

            }catch(erro) {
                res.send('Erro ao salvar a imagem');
            }
        
        }
        
    }

    async Mostrar(req, res) {

        try {

            const dados = await ModelPostagens.findAll();
            res.status(200).json(dados)

        }catch(erro) {
            res.send('Erro ao carregar potagens');
        }

    }

    Postagens(req, res) {
        res.render('mostrar')
    }

    async Deletar(req, res) {

        try {

            res.send('deletou!!!!!!!!!!!!!!!!!!!!!')
            // const id = req.parms.id
            // console.log(id)
            // res.deletado

        }catch(erro) {
            res.send('Erro ao deletar potagen');
        }

    }
    
}

 
module.exports = new ControllerArquivo; 