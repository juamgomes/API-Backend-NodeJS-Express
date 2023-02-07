const express = require('express');
const { send } = require('express/lib/response');
const app = express();

const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (Single & All), Update and Delete
CRUD: Criar, Ler (Individual e Tudo), Atualizar e Removeer
- [GET] /Mensagens - Retorna a lista de mensagens
- [GET] /Mensagens/{ID} - Retorna uma unica mensagem pelo ID
- [POST] /Mensagens - Cria novas mensagens 
- [PUT] /Mensagens{id} - Atualiza uma mensagem pelo ID
- [DELETE] /Mensagens/{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
    "Primeira mensagem",
    "Segunda mensagem"
]

// - [GET] /Mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(mensagens);
});
    
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;

    const mensagem = mensagens[id];

    res.send(mensagem);
})



app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});