const {Router} = require('express');
const {getProveedor,postProveedores,getOneProveedor,putProveedores} = require('../../controllers/proveedor/proveedorController');
const router = Router();

//ruta para iniciar sesion
router.get('/getProveedor', getProveedor )

router.get('/getOneProveedor/:idProveedor', getOneProveedor )

router.post('/postProveedores', postProveedores )

router.put('/putProveedor', putProveedores )

module.exports = router;