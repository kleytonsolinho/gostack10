const express = require('express');

const server = express();

//Query Params = ?teste=1
//Route Params = /users/1
//Request Body = { "name": "Kleyton", "email": "teste@teste.com.br" }

server.get('/teste', (req, res) => {
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
})

server.listen(3000);