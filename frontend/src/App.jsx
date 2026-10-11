import { useState } from 'react';
import { getComisiones } from './api';
import FormularioFechas from './components/FormularioFechas.jsx';
import TablaComisiones from './components/TablaComisiones.jsx';

// VISTA (React): solo muestra datos y captura lo que escribe el usuario.
export default function App() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [resultados, setResultados] = useState(null);
  const [modoDemo, setModoDemo] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const calcular = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getComisiones(fechaInicio, fechaFin);
      setResultados(data.resultados);
      setModoDemo(data.modoDemo);
    } catch (err) {
      setResultados(null);
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Calcular Comisión de Ventas</h1>
      {modoDemo && <p className="aviso">Modo demo: datos de ejemplo (sin Supabase).</p>}
      <FormularioFechas
        fechaInicio={fechaInicio}
        fechaFin={fechaFin}
        setFechaInicio={setFechaInicio}
        setFechaFin={setFechaFin}
        onCalcular={calcular}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
      {resultados && <TablaComisiones resultados={resultados} />}
    </div>
  );
}
