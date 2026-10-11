export default function TablaComisiones({ resultados }) {
  return (
    <>
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr><th>Vendedor</th><th>Ventas</th><th>Total vendido</th><th>Comisión</th></tr>
        </thead>
        <tbody>
          {resultados.map((r, i) => (
            <tr key={i}>
              <td>{r.nombre}</td>
              <td>{r.cantidadVentas}</td>
              <td>${r.totalVentas.toFixed(2)}</td>
              <td>${r.totalComision.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
