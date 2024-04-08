const {Router} = require('express');
const {getEstado,postEstados,getOneEstados,putEstados} = require('../../controllers/estados/estadosController');
const router = Router();

//ruta para iniciar sesion
router.get('/getEstados', getEstado )


router.get('/getOneEstados/:idEstado', getOneEstados )

router.post('/postEstados', postEstados )

router.put('/putEstados', putEstados )



module.exports = router;