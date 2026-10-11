const { supabase, modoDemo } = require('../config/supabase');
const demo = require('../data/demo');

// MODELO: solo habla con la base de datos. No tiene HTML ni logica de pantalla.
async function obtenerTodos() {
  if (modoDemo) return demo.vendedores;
  const { data, error } = await supabase.from('Vendedor').select('*');
  if (error) throw error;
  return data;
}

module.exports = { obtenerTodos };
