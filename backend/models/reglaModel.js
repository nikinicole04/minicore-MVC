const { supabase, modoDemo } = require('../config/supabase');
const demo = require('../data/demo');

async function obtenerTodas() {
  if (modoDemo) return demo.reglas;
  const { data, error } = await supabase.from('Reglas').select('*');
  if (error) throw error;
  return data;
}

module.exports = { obtenerTodas };
