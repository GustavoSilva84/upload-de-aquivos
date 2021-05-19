const express = require('express')
const router = express.Router();
const ControllerArquivo = require('./controllers/ControllerArquivo')
const upload = require('./middleware/MiddlewareMulter')
 
router.get('/', ControllerArquivo.Mostrar);
router.post('/', upload.single('img'), ControllerArquivo.Criar); 
router.get('/m', ControllerArquivo.Me)
 
module.exports = router;