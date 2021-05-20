class ControllerPaginas {

    Form(req, res) {   
        res.render('form');
    } 

    Postagens(req, res) {
        res.render('mostrar');
    }

}

module.exports = new ControllerPaginas;