const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Servir arquivos estáticos da pasta dist
app.use('/loja', express.static(path.join(__dirname, 'dist')));

// Rota para servir o index.html para todas as rotas /loja/*
app.get('/loja*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Rota raiz redireciona para /loja
app.get('/', (req, res) => {
  res.redirect('/loja');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📋 Aplicação disponível em http://localhost:${PORT}/loja`);
  console.log(`🔗 Para ngrok: https://[seu-subdomain].ngrok-free.app/loja`);
}); 