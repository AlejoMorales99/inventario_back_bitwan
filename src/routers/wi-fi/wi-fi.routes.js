const {Router} = require('express');
const {getWifi,postWifi,getOneWifi,wifiEditar} = require('../../controllers/wi-fi/wi-fiController');
const router = Router();


router.get('/getWifi', getWifi )

router.get('/getOneWifi/:id', getOneWifi )

router.post('/postWifi', postWifi )

router.put('/wifiEditar', wifiEditar )

module.exports = router;