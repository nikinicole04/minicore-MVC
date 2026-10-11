const { supabase, modoDemo } = require('../config/supabase');
const demo = require('../data/demo');

async function obtenerPorFechas(fechaInicio, fechaFin) {
  if (modoDemo) {
    return demo.ventas.filter(
      (v) => v.fecha_venta >= fechaInicio && v.fecha_venta <= fechaFin
    );
  }
  const { data, error } = await supabase
    .from('Ventas')
    .select('*')
    .gte('fecha_venta', fechaInicio)
    .lte('fecha_venta', fechaFin);
  if (error) throw error;
  return data;
}

module.exports = { obtenerPorFechas };
