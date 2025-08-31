const express = require("express");
const path = require("path");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'frontend/assets')));
app.use(express.static(path.resolve(__dirname, "public")));


app.set("views", path.resolve(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
