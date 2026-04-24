const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//hola mundo
app.get('/', (req, res) => {
  res.send('<h1>ERP Demo: Despliegue Seguro ✅</h1><p>Estado: Funcionando en contenedor.</p>');
});

// Endpoint de Salud: Vital para el Demo en AWS
app.get('/health', (req, res) => {
  res.status(500).send('OK');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});