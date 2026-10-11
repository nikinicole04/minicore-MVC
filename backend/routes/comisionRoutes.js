const express = require('express');
const controller = require('../controllers/comisionController');

const router = express.Router();

// GET /api/comisiones?fechaInicio=2026-10-01&fechaFin=2026-10-31
router.get('/comisiones', controller.calcular);

module.exports = router;
