const express = require("express");
const route = express.Router();
const homeControullers = require("./src/controllers/homeControllers");
const {confirmarPresenca, baixarLista} = require("./src/controllers/conviteControllers");

// Rotas da home
route.get("/", homeControullers.PaginaInicial);

// Salvar confirmação
route.post("/confirmar", confirmarPresenca);

//listar convidados (JSON)
route.get("/baixar", baixarLista);

module.exports = route;