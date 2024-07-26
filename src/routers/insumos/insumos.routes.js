const {Router} = require('express');
const router = Router();
const insumosController = require('../../controllers/insumos/insumosControlle');



//Ruta para Buscar activos fijos dependiendo de la columna
router.get('/api/getAllInsumos/:numeroTercero', insumosController.getAllInsumos );


router.post('/api/postInsumosExistentes' , insumosController.postInsumosExistentes);


router.post('/api/postInsumoNuevo' , insumosController.postInsumoNuevo);



module.exports = router;