const comisionModel = require('../models/comisionModel');
const { modoDemo } = require('../config/supabase');

// CONTROLADOR: valida la peticion, pide datos al modelo y responde JSON.
async function calcular(req, res) {
  const { fechaInicio, fechaFin } = req.query;

  if (!fechaInicio || !fechaFin) {
    return res.status(400).json({ error: 'Debes enviar fechaInicio y fechaFin.' });
  }
  if (fechaInicio > fechaFin) {
    return res.status(400).json({ error: 'La fecha de inicio no puede ser mayor que la fecha fin.' });
  }

  try {
    const resultados = await comisionModel.calcularPorRango(fechaInicio, fechaFin);
    res.json({ modoDemo, resultados });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al calcular comisiones.' });
  }
}

module.exports = { calcular };
