const nomes = [];
const inputNome = document.getElementById("nome");
const btnCurtir = document.getElementById("curtirBtn");
const mensagem = document.getElementById("mensagem");

btnCurtir.addEventListener("click", function () {
    const nome = inputNome.value.trim();

    if (nome && !nomes.includes(nome)) {
        nomes.push(nome);
    }

    inputNome.value = "";
    atualizarMensagem();
});

function atualizarMensagem() {
    if (nomes.length === 0) {
        mensagem.textContent = "Ninguém curtiu";
    } else if (nomes.length === 1) {
        mensagem.textContent = `${nomes[0]} curtiu`;
    } else if (nomes.length === 2) {
        mensagem.textContent = `${nomes[0]} e ${nomes[1]} curtiram`;
    } else {
        mensagem.textContent = `${nomes[0]}, ${nomes[1]} e mais ${nomes.length - 2} pessoas curtiram`;
    }
}
