function calcularTempoRestante(dataFutura) {
      const agora = new Date();
      const diferenca = dataFutura - agora;

      if (diferenca <= 0) {
        return {
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0
        };
      }

      const segundos = Math.floor((diferenca / 1000) % 60);
      const minutos = Math.floor((diferenca / 1000 / 60) % 60);
      const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
      const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

      return { dias, horas, minutos, segundos };
    }

    function atualizarTemporizador() {
      const dataFutura = new Date("2025-12-31T23:59:59"); 
      const tempo = calcularTempoRestante(dataFutura);

      document.getElementById("temporizador").innerHTML =
        `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
    }

    setInterval(atualizarTemporizador, 1000);
    atualizarTemporizador();