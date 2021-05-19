const fs = require('fs');
const multer = require('multer');

if(!fs.existsSync('./dados')) fs.mkdirSync('./dados');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
      cb(null, 'dados/')
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname.toString())   
    } 

})  

const upload = multer({ storage });

module.exports = upload