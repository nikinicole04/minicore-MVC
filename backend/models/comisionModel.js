const vendedorModel = require('./vendedorModel');
const ventaModel = require('./ventaModel');
const reglaModel = require('./reglaModel');

// MODELO: regla de negocio. Calcula la comision de cada vendedor en un rango de fechas.
async function calcularPorRango(fechaInicio, fechaFin) {
  const [ventas, vendedores, reglas] = await Promise.all([
    ventaModel.obtenerPorFechas(fechaInicio, fechaFin),
    vendedorModel.obtenerTodos(),
    reglaModel.obtenerTodas(),
  ]);

  // Se ordenan de mayor a menor monto minimo para aplicar siempre la regla mas alta que cumpla.
  const reglasOrdenadas = [...reglas].sort((a, b) => b.amount - a.amount);

  return vendedores.map((vendedor) => {
    const ventasVendedor = ventas.filter((v) => v.vendedor_id === vendedor.id);
    let totalVentas = 0;
    let totalComision = 0;

    ventasVendedor.forEach((venta) => {
      totalVentas += venta.monto;
      const regla = reglasOrdenadas.find((r) => venta.monto >= r.amount);
      if (regla) totalComision += venta.monto * regla.rule;
    });

    return {
      nombre: vendedor.nombre,
      cantidadVentas: ventasVendedor.length,
      totalVentas,
      totalComision,
    };
  });
}

module.exports = { calcularPorRango };
