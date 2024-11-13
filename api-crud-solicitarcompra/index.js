const express = require('express');
const bodyParser = require('body-parser');
const client = require('./db'); // importa o arquivo de conexão do banco de dados

const app = express();
app.use(bodyParser.json());

// Porta do servidor
const PORT = 5000;

// Teste de conexão
app.get('/', (req, res) => {
    res.send('API de gerenciamento de armas ativa!');
});

// CRUD para "fabricante_arma"

// CREATE - Adicionar um novo fabricante
app.post('/fabricante_arma', async (req, res) => {
    const { nome, sigla } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO fabricante_arma (nome, sigla) VALUES ($1, $2) RETURNING *',
            [nome, sigla]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar fabricante' });
    }
});

// READ - Listar todos os fabricantes
app.get('/fabricante_arma', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM fabricante_arma');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar fabricantes' });
    }
});

// UPDATE - Atualizar um fabricante
app.put('/fabricante_arma/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, sigla } = req.body;
    try {
        const result = await client.query(
            'UPDATE fabricante_arma SET nome = $1, sigla = $2 WHERE id = $3 RETURNING *',
            [nome, sigla, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar fabricante' });
    }
});

// DELETE - Excluir um fabricante
app.delete('/fabricante_arma/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await client.query('DELETE FROM fabricante_arma WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir fabricante' });
    }
});

// Repetir CRUD para as demais tabelas (Exemplo para "especie_arma")

// CREATE - Adicionar uma nova espécie de arma
app.post('/especie_arma', async (req, res) => {
    const { nome } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO especie_arma (nome) VALUES ($1) RETURNING *',
            [nome]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar espécie de arma' });
    }
});

// READ - Listar todas as espécies de armas
app.get('/especie_arma', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM especie_arma');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar espécies de armas' });
    }
});

// UPDATE - Atualizar uma espécie de arma
app.put('/especie_arma/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        const result = await client.query(
            'UPDATE especie_arma SET nome = $1 WHERE id = $2 RETURNING *',
            [nome, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar espécie de arma' });
    }
});

// DELETE - Excluir uma espécie de arma
app.delete('/especie_arma/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await client.query('DELETE FROM especie_arma WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir espécie de arma' });
    }
});

// CRUDs semelhantes para "tipo_arma", "modelo_arma", "solicitacao_compra_arma", e "policial"
// Faça CRUD similar para as outras tabelas de acordo com os campos que você especificou anteriormente.

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
