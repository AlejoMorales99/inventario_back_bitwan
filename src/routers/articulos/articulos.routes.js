const {Router} = require('express');
const {getArticulos} = require('../../controllers/articulos/articulosController');
const router = Router();


router.get('/getArticulos', getArticulos )



module.exports = router;