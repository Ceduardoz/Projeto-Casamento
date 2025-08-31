export function iniciarContador() {
    const contadorEl = document.getElementById("contador");
    if (!contadorEl) return;

    let dataFinal = Number(localStorage.getItem("dataAlvo"));
    if (isNaN(dataFinal)) {
        const dataAlvo = new Date("2025-10-26T23:59:59").getTime();
        localStorage.setItem("dataAlvo", dataAlvo);
        dataFinal = dataAlvo;
    }

    function atualizarContador() {
        const agora = new Date().getTime();
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

    atualizarContador(); // primeira atualização
    const intervalo = setInterval(atualizarContador, 1000);
}
