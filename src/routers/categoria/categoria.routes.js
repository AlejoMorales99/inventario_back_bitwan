const {Router} = require('express');
const {getCategoria,postCategorias,getOneCategoria,putCategoria} = require('../../controllers/categorias/categoriasController');
const router = Router();

//ruta para iniciar sesion
router.get('/getCategoria', getCategoria )

router.get('/getOneCategoria/:idCategoria', getOneCategoria )

router.post('/postCategorias', postCategorias )

router.put('/putCategoria', putCategoria )


module.exports = router;