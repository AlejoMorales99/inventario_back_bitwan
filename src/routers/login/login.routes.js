const {Router} = require('express');
const {getUsuario,loginUsuario,newUsuario} = require('../../controllers/login/loginController');
const router = Router();

//ruta para iniciar sesion
router.post('/getUsuario', getUsuario )

router.get('/loginUsuario/:nombreUsuario/:numTercero',loginUsuario)


router.get('/postLoginUsuario/:newUsuario/:numtercero/:password',newUsuario)

module.exports = router;