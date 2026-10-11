// Aqui React habla con el backend Express (ya no con Supabase directo).
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function getComisiones(fechaInicio, fechaFin) {
  const params = new URLSearchParams({ fechaInicio, fechaFin });
  const res = await fetch(`${API_URL}/api/comisiones?${params}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Error al calcular comisiones');
  return data; // { modoDemo, resultados: [...] }
}
