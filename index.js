const express = require('express');
const bodyParser = require('body-parser');
const { send } = require('express/lib/response');
const app = express();

const port = 3000;

app.use(bodyParser.json());

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
    {
        "id": 1,
        "texto": "Primeira mensagem",
    },
    {
        "id": 2,
        "texto": "Segunda mensagem",
    }
]

// - [GET] /Mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
    res.send(mensagens.filter(Boolean));
});
    
// - [GET] /Mensagens/{ID} - Retorna uma unica mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;

    const mensagem = mensagens[id];

    if(!mensagem){
        res.send("Mensagem não encontrada!");

        return;
    }
    
    res.send(mensagem);
});

// - [POST] /Mensagens - Cria novas mensagens 
app.post('/mensagens', (req, res) => {
    const mensagem = req.body;

    if(!mensagem || !mensagem.texto) {
        res.send('Mensagem invalida');

        return;
    }

    mensagem.id = mensagens.length + 1;
    mensagens.push(mensagem);

    res.send(mensagem);
});

// - [PUT] /Mensagens{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;

    const mensagem = mensagens[id];

    const novoTexto = req.body.texto;
    mensagem.texto = novoTexto;

    if (!novoTexto) {
        res.send("Mensagem inválida!")

        return;
    }

    res.send(mensagem);
})

// - [DELETE] /Mensagens/{id} - Remover uma mensagem pelo ID
app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;

    delete mensagens[id];

    res.send("Mensagem renovida com sucesso!");
})

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});