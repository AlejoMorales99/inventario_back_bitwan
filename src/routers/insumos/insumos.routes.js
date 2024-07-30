const {Router} = require('express');
const router = Router();
const insumosController = require('../../controllers/insumos/insumosControlle');



//Ruta para Buscar activos fijos dependiendo de la columna
router.get('/api/getAllInsumos/:numeroTercero', insumosController.getAllInsumos );

//Ruta para obtener el historial general de todas las compras de insumos
router.get('/api/getAllHistorialInsumos', insumosController.getAllHistorialInsumos);

//Ruta para obtener el historial general de todas las compras de insumos
router.get('/api/getInsumosFechaInicioFechFin/:fechaInicio/:fechaFin/:insumoTextHistorial', insumosController.getInsumosFechaInicioFechFin);

//Ruta para aumentar la cantidad de insumos existentes
router.post('/api/postInsumosExistentes' , insumosController.postInsumosExistentes);

//Ruta para registrar nuevos insumos en el inventario
router.post('/api/postInsumoNuevo' , insumosController.postInsumoNuevo);





module.exports = router;