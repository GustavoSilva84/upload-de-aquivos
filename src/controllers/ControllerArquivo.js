const path = require('path')
const ModelPostagens = require('../model/ModelPostagens');

class ControllerArquivo {

    Mostrar(req, res) {   
        
        res.render('index');
    } 

    Criar(req, res) {

        console.log(req.file)

        if(req.file) {

            ModelPostagens.create({
                msg: req.body.titulo,
                img: req.file.filename
            }).then(() => {
                res.send('criado com sucesso')
                
            })

            return

            // let d = path.resolve(__dirname, '../', '../', './dados', `/${ req.file.filename }` )
            
            // res.send(`<img width="200px" src="${d}">`)
            // return

        }

        res.send('nxbwb')
        
    }

    Me(req, res) {

        ModelPostagens.findAll().then((dados) => {
            res.render('mostrar', {
                dados: dados
            })
        })

    }
    


}

 
module.exports = new ControllerArquivo; 