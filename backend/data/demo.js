// Datos de ejemplo para probar sin Supabase (misma forma que las tablas del proyecto original)
module.exports = {
  vendedores: [
    { id: 1, nombre: 'Ana Torres' },
    { id: 2, nombre: 'Luis Pérez' },
    { id: 3, nombre: 'María Gómez' },
  ],
  ventas: [
    { id: 1, vendedor_id: 1, monto: 500, fecha_venta: '2026-10-01' },
    { id: 2, vendedor_id: 1, monto: 1500, fecha_venta: '2026-10-03' },
    { id: 3, vendedor_id: 2, monto: 800, fecha_venta: '2026-10-05' },
    { id: 4, vendedor_id: 2, monto: 3000, fecha_venta: '2026-10-07' },
    { id: 5, vendedor_id: 3, monto: 200, fecha_venta: '2026-10-09' },
    { id: 6, vendedor_id: 3, monto: 1200, fecha_venta: '2026-09-20' },
  ],
  // amount = monto minimo de la venta, rule = porcentaje de comision (0.05 = 5%)
  reglas: [
    { id: 1, amount: 0, rule: 0.02 },
    { id: 2, amount: 1000, rule: 0.05 },
    { id: 3, amount: 2500, rule: 0.1 },
  ],
};
