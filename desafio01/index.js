const express = require('express');
const server = express();
//server.use(express.json());

const projects = ["1", "Novo Projeto"];

server.get('/projects', (req, res) => {
  //console.log("Funcionando");

  return res.json(projects);
})

server.listen(3000);