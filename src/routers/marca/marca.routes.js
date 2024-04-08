const {Router} = require('express');
const {getMarca,postMarca,getOneMarca,putMarca} = require('../../controllers/marca/marcaController');
const router = Router();

//ruta para iniciar sesion
router.get('/getMarca', getMarca )

router.get('/getOneMarca/:idMarca', getOneMarca )

router.post('/postMarca', postMarca )

router.put('/putMarca', putMarca )

module.exports = router;