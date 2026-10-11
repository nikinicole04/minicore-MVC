# Minicore Fullstack

Aplicación web que calcula las comisiones de ventas de cada vendedor dentro de un rango de fechas, separando la lógica en el patrón MVC (React como Vista, Express como Modelo y Controlador).

## Tecnologías (Stack)

**Frontend (Vista)**
- JavaScript
- React 19
- Vite 6

**Backend (Modelo y Controlador)**
- Node.js 18 o superior
- Express 4
- CORS y dotenv

**Base de datos**
- Supabase (PostgreSQL) mediante `@supabase/supabase-js`
- Modo demo con datos locales (`backend/data/demo.js`) cuando no hay credenciales

**Despliegue**
- Render (backend)
- Vercel (frontend)

## Guía de instalación

### 1. Requisitos previos
- [Node.js](https://nodejs.org/) 18 o superior (incluye npm)
- Git
- Una cuenta de [Supabase](https://supabase.com/) (opcional: sin ella la app funciona en modo demo)

### 2. Clonar el repositorio
```bash
git clone https://github.com/nikinicole04/minicore-MVC.git
cd minicore-MVC
```

### 3. Instalar dependencias
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 4. Configurar variables de entorno

**Backend**: copia el archivo de ejemplo y complétalo con los datos de tu proyecto de Supabase.
```bash
cd backend
cp .env.example .env        # en Windows: copy .env.example .env
```

| Variable       | Descripción                                   |
|----------------|-----------------------------------------------|
| `SUPABASE_URL` | URL de tu proyecto de Supabase                |
| `SUPABASE_KEY` | Clave `anon` de tu proyecto de Supabase       |
| `PORT`         | Puerto de la API (por defecto `3001`)         |

> Si no completas `SUPABASE_URL` y `SUPABASE_KEY`, el backend arranca en **modo demo** con datos de prueba.

**Frontend**:
```bash
cd frontend
cp .env.example .env        # en Windows: copy .env.example .env
```

| Variable       | Descripción                                          |
|----------------|------------------------------------------------------|
| `VITE_API_URL` | URL del backend, por ejemplo `http://localhost:3001` |

> El puerto de `VITE_API_URL` debe coincidir con el `PORT` del backend.

## Instrucciones de uso

Abre dos terminales.

**Terminal 1: backend**
```bash
cd backend
npm start          # o npm run dev para reiniciar automáticamente al guardar
```
La API queda disponible en `http://localhost:3001`.

**Terminal 2: frontend**
```bash
cd frontend
npm run dev
```
Abre `http://localhost:5173` en el navegador, elige la fecha de inicio y la fecha fin, y pulsa calcular para ver la tabla de comisiones.

### Probar la API directamente
```bash
curl "http://localhost:3001/api/comisiones?fechaInicio=2026-10-01&fechaFin=2026-10-31"
```

Respuesta de ejemplo:
```json
{
  "modoDemo": true,
  "resultados": [ ... ]
}
```

Si falta alguna fecha o la fecha de inicio es mayor que la fecha fin, la API responde con un error `400`.

### Compilar el frontend para producción
```bash
cd frontend
npm run build
npm run preview
```

## Estructura de carpetas

```
minicore-fullstack/
├── backend/
│   ├── server.js                 # arranque de Express (+ CORS)
│   ├── config/supabase.js        # conexión a Supabase (modo demo si no hay .env)
│   ├── models/                   # M: consultas y regla de negocio
│   │   ├── vendedorModel.js
│   │   ├── ventaModel.js
│   │   ├── reglaModel.js
│   │   └── comisionModel.js
│   ├── controllers/comisionController.js   # C: valida y responde JSON
│   ├── routes/comisionRoutes.js            # GET /api/comisiones
│   └── data/demo.js              # datos de prueba para el modo demo
└── frontend/
    └── src/
        ├── App.jsx               # V: pantalla principal
        ├── components/           # V: FormularioFechas, TablaComisiones
        └── api.js                # llama al backend con fetch
```

Flujo: **React (Vista) → fetch → Ruta → Controlador → Modelo → Supabase → JSON → React**
