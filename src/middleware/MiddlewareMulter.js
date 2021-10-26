const fs = require('fs');
const multer = require('multer');

if(!fs.existsSync('./dados')) fs.mkdirSync('./dados');

module.exports = (multer({

    storage: multer.diskStorage({

        destination: (req, file, cb) => {
            cb(null, 'dados/')
        },
    
        filename: (req, file, cb) => {
            cb(null,  `${Date.now()} - ${file.originalname.toString()}` )   
        }

    })


}))
