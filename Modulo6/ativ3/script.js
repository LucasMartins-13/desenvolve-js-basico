let tarefas = [];

const inputDescricao = document.getElementById("descricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.addEventListener("change", () => {
            tarefa.status = !tarefa.status;
            renderizarTarefas();
        });

        const label = document.createElement("label");
        label.textContent = tarefa.descricao;
        label.className = tarefa.status ? "concluida" : "nao-concluida";

        li.appendChild(checkbox);
        li.appendChild(label);
        listaTarefas.appendChild(li);
    });
}

btnAdicionar.addEventListener("click", () => {
    const descricao = inputDescricao.value.trim();

    if (descricao) {
        tarefas.push({ descricao, status: false });
        inputDescricao.value = "";
        renderizarTarefas();
    }
});

inputDescricao.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btnAdicionar.click();
    }
});

renderizarTarefas();
