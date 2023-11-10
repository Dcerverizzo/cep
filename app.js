const express = require('express');
const cepRoutes = require('./src/routes/cepRoutes');

const app = express();

app.use('/', cepRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
