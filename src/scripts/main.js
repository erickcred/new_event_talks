// Iniciando Animation Aos
AOS.init();


const diaEvento = new Date("Jun 28, 2023 09:00:00");
const timeStempEvento = diaEvento.getTime();

let fimevento = setInterval(function() {
    let displayHtml = document.getElementById("contador");
    const agora = new Date();
    const timeStempAtual = agora.getTime();
    const tempoAteEvento = timeStempEvento - timeStempAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(tempoAteEvento / diaEmMs);
    const horas = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((tempoAteEvento % minutoEmMs) / 1000);

    displayHtml.innerHTML = `
        ${dias}d ${horas}h ${minutos}m ${segundos}s 
    `;

    if (tempoAteEvento < 0) {
        displayHtml.innerHTML = "Evento já iniciado"
        clearInterval(fimevento);
    }
}, 1000);
