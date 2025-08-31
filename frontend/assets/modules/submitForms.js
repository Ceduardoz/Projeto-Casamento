export function handleFormSubmit() {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nome: form.nome.value,
      adultos: form.adultos.value,
      criancas: form.criancas.value,
      mensagem: form.mensagem.value
    };

    try {
      const res = await fetch("/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        alert("Confirmação registrada!");
        form.reset();
      } else {
        alert("Erro ao registrar confirmação.");
      }
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao enviar a confirmação.");
    }
  });
}

// Botão de download
export function handleDownload() {
  const btnDownload = document.getElementById("btnDowload");

  btnDownload.addEventListener("click", () => {
    const senha = prompt("Digite a senha para baixar a lista:");

    // Coloque a senha que você quiser aqui
    const senhaCorreta = "meusonho123";

    if (senha === senhaCorreta) {
      window.location.href = "/baixar";
    } else {
      alert("Senha incorreta! Você não tem permissão para baixar a lista.");
    }
  });
}

