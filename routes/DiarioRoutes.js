const express = require('express');
const router = express.Router();
const DiarioController = require('../controllers/DiarioController');

router.get('/diarios', DiarioController.listsDiario);
router.get('/diarios/:id', DiarioController.UmDiario);
router.post('/diarios', DiarioController.createDiario);
router.put('/diarios/:id', DiarioController.UpdateDiario);
router.delete('/diarios/:id', DiarioController.DeleteDiario);

module.exports = router;