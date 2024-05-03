import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

// Middleware para configurar cabeçalhos CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/igdb-api', async (req, res) => {
  try {
    const response = await axios.get(`${req.query.url}`, {
      headers: {
        'Client-ID': 'tr0npy5qd94dkf18czwhv5k97ywu6l', // Substitua pelo seu Client ID da IGDB
        'Authorization': `Bearer ${req.query.token}`,
        'Accept': 'application/json'
      },
      params: {
        'fields': `${req.query.method}`,

      }
    });
    res.json(response.data) 
    console.log(response.data) 
  } catch (error) {
    console.error('Erro ao obter jogos:', error);
    res.status(500).json({ error: 'Erro ao obter jogos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
  
});