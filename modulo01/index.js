const express = require('express');

const server = express();

//Query Params = ?teste=1
//Route Params = /users/1
//Request Body = { "name": "Kleyton", "email": "teste@teste.com.br" }

const users = ["Lucas", "Robson", "João"];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.listen(3000);