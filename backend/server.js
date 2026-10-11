require('dotenv').config();
const express = require('express');
const cors = require('cors');
const comisionRoutes = require('./routes/comisionRoutes');
const { modoDemo } = require('./config/supabase');

const app = express();

app.use(cors()); // permite que el frontend (React) consuma esta API
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true, app: 'Minicore API', modoDemo }));
app.use('/api', comisionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API lista en http://localhost:${PORT}`));
