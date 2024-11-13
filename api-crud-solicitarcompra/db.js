const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'jenni',
  password: 'dtic2024',
  database: 'compra',
  port: 5432 
});

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conectado ao banco de dados PostgreSQL!');
  }
});

module.exports = client;
