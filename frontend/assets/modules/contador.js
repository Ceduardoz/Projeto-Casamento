export function iniciarContador() {
    const contadorEl = document.getElementById("contador");
    if (!contadorEl) return;

    // Data alvo do casamento (horário local)
    const dataFinal = new Date(2025, 9, 26, 23, 59, 59).getTime(); // Outubro = 9

    function atualizarContador() {
        const agora = new Date().getTime(); // pega o horário exato de agora
        const distancia = dataFinal - agora;

        if (distancia <= 0) {
            contadorEl.innerHTML = "🎉 Tempo Esgotado!";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        contadorEl.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    atualizarContador(); // primeira atualização imediata
    const intervalo = setInterval(atualizarContador, 1000); // atualiza a cada segundo
}