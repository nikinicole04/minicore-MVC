require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

// Si no hay credenciales, la app funciona en "modo demo" con datos de ejemplo.
const supabase = url && key ? createClient(url, key) : null;

module.exports = { supabase, modoDemo: !supabase };
