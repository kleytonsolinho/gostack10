const express = require('express');

const server = express();
server.use(express.json());

//Query Params = ?teste=1
//Route Params = /users/1
//Request Body = { "name": "Kleyton", "email": "teste@teste.com.br" }

//CRUD - Create, Read, Update, Delete

const users = ["Lucas", "Robson", "João"];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}, URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});

function checkUsersExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({ error: 'User does not exists' });
  }

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
})

server.post('/users', checkUsersExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', checkUsersExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);