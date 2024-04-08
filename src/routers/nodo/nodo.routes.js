const {Router} = require('express');
const {getNodo,postNodo,getOneNodo,putNodo} = require('../../controllers/conexionNodo/conexionNodoController');
const router = Router();


router.get('/getNodo', getNodo )

router.get('/getOneNodo/:id', getOneNodo )

router.post('/postNodo', postNodo )

router.put('/putNodo', putNodo )

module.exports = router;