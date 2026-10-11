export default function FormularioFechas({
  fechaInicio, fechaFin, setFechaInicio, setFechaFin, onCalcular, loading,
}) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onCalcular(); }}
      className="formulario"
    >
      <label>
        Fecha Inicio:
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
      </label>
      <label>
        Fecha Fin:
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Calculando...' : 'Calcular'}
      </button>
    </form>
  );
}
