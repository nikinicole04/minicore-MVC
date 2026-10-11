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
Copia `.env.example` a `.env` en `backend/` y en `frontend/`:
- **backend/.env**: `SUPABASE_URL`, `SUPABASE_KEY` y `PORT`. Sin credenciales, la app funciona en modo demo.
- **frontend/.env**: `VITE_API_URL`, la URL del backend (por ejemplo `http://localhost:3001`).

## Instrucciones de uso

En dos terminales:
```bash
cd backend && npm start      # API en http://localhost:3001
cd frontend && npm run dev   # App en http://localhost:5173
```

Abre la app, elige un rango de fechas y calcula las comisiones. También puedes consultar la API directamente:
```bash
curl "http://localhost:3001/api/comisiones?fechaInicio=2026-10-01&fechaFin=2026-10-31"
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
