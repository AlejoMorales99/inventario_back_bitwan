const {Router} = require('express');

//se importan todas las funciones del controlador para poder usarlas
const {getTipoDeEquipo,registrarEquipos,getOneTipoDeEquipo,putTipoDeEquipo} = require('../../controllers/tipoDeEquipo/tipoDeEquipo');

const router = Router();


//Ruta para Buscar activos fijos dependiendo de la columna
router.get('/getTipoDeEquipo', getTipoDeEquipo )

router.get('/getOneTipoDeEquipo/:idEquipo', getOneTipoDeEquipo )

router.post('/registrarEquipos',registrarEquipos)

router.put('/putTipoDeEquipo',putTipoDeEquipo)

module.exports = router;