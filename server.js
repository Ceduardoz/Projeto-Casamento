const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, "frontend/assets/css/css")));
app.use(express.static(path.join(__dirname, "frontend/assets/js")));
app.use(express.static(path.join(__dirname, "public")));

// EJS
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// CORS
app.use(cors());

// Rotas
app.use(routes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
