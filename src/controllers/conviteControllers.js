const fs = require("fs");
const FILE = "convidados.json";

// Salvar confirmação
function confirmarPresenca(req, res) {
  const { nome, adultos, criancas, mensagem } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  let convidados = [];
  if (fs.existsSync(FILE)) {
    convidados = JSON.parse(fs.readFileSync(FILE, "utf8"));
  }

  convidados.push({ nome, adultos, criancas, mensagem });
  fs.writeFileSync(FILE, JSON.stringify(convidados, null, 2));

  res.json({ success: true });
}

// Baixar lista de convidados como TXT
function baixarLista(req, res) {
  if (!fs.existsSync(FILE)) {
    return res.status(404).send("Nenhum convidado encontrado.");
  }

  const convidados = JSON.parse(fs.readFileSync(FILE, "utf8"));

  // Formatar texto
  let texto = "=== Lista de Convidados ===\n\n";
  let totalAdultos = 0;
  let totalCriancas = 0;

  convidados.forEach((c, index) => {
    texto += `${index + 1}. ${c.nome}\n`;
    texto += `   Adultos: ${c.adultos}\n`;
    texto += `   Crianças: ${c.criancas || 0}\n\n`;
    totalAdultos += Number(c.adultos);
    totalCriancas += Number(c.criancas || 0);
  });

  texto += `=== Totais ===\n`;
  texto += `Total de Adultos: ${totalAdultos}\n`;
  texto += `Total de Crianças: ${totalCriancas}\n`;
  texto += `Total Geral: ${totalAdultos + totalCriancas}\n`;

  res.setHeader("Content-Disposition", "attachment; filename=convidados.txt");
  res.setHeader("Content-Type", "text/plain");
  res.send(texto);
}

module.exports = {
  confirmarPresenca,
  baixarLista
};
