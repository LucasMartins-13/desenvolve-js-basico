const dataFutura = new Date("2025-05-01T12:00:00"); 

function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return null; 
  }

  let totalSegundos = diferenca / 1000;

  let dias = (totalSegundos / (60 * 60 * 24)) | 0;
  totalSegundos = totalSegundos - (dias * 60 * 60 * 24);

  let horas = (totalSegundos / (60 * 60)) | 0;
  totalSegundos = totalSegundos - (horas * 60 * 60);

  let minutos = (totalSegundos / 60) | 0;
  totalSegundos = totalSegundos - (minutos * 60);

  let segundos = totalSegundos | 0;

  return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataFutura);

  if (!tempo) {
    clearInterval(intervalo);
    document.getElementById('Anos').innerText = "Tempo esgotado!";
    document.getElementById('Meses').innerText = "";
    document.getElementById('Dias').innerText = "";
    document.getElementById('Horas').innerText = "";
    document.getElementById('Minutos').innerText = "";
    document.getElementById('Segundos').innerText = "";
    return;
  }

  document.getElementById('Anos').innerText = `Anos: ${tempo.anos}`;
  document.getElementById('Meses').innerText = `Meses: ${tempo.meses}`;
  document.getElementById('Dias').innerText = `Dias: ${tempo.dias}`;
  document.getElementById('Horas').innerText = `Horas: ${tempo.horas}`;
  document.getElementById('Minutos').innerText = `Minutos: ${tempo.minutos}`;
  document.getElementById('Segundos').innerText = `Segundos: ${tempo.segundos}`;
}

const intervalo = setInterval(atualizarTemporizador, 1000);
atualizarTemporizador(); 

