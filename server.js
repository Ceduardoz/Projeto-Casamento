const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "frontend")));

// configurando EJS
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(3000,() => {
    console.log("Acessar http://localhost:3000");
    console.log("Servido na porta 3000");
});