const {Router} = require('express');
const {getBodegas,getAllBodegas,crearBodegas,eliminarBodega} = require('../../controllers/bodegas/bodegasController.js');
const router = Router();


router.get('/getBodegas', getBodegas )


router.get('/getAllBodegas', getAllBodegas )


router.post('/crearBodegas', crearBodegas )

router.delete('/eliminarBodega/:id', eliminarBodega )



module.exports = router;