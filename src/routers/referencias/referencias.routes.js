const {Router} = require('express');
const {getReferencias,postReferencias,getOneReferencia,putReferencias,getTiposEquipos} = require('../../controllers/referencias/referenciaController');
const router = Router();

//ruta para iniciar sesion
router.get('/getReferencias', getReferencias )

router.get('/getTiposEquipos', getTiposEquipos )

router.get('/getOneReferencia/:id', getOneReferencia )

router.post('/postReferencias', postReferencias )

router.put('/putReferencias', putReferencias )

module.exports = router;