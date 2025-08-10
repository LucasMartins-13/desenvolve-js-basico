let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const inputDescricao = document.getElementById("descricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.addEventListener("change", () => {
            tarefa.status = !tarefa.status;
            salvarTarefas();
            renderizarTarefas();
        });

        const label = document.createElement("label");
        label.textContent = tarefa.descricao;
        label.className = tarefa.status ? "concluida" : "nao-concluida";

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.className = "btn-excluir";
        btnExcluir.addEventListener("click", () => {
            tarefas.splice(index, 1);
            salvarTarefas();
            renderizarTarefas();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(btnExcluir);
        listaTarefas.appendChild(li);
    });
}

btnAdicionar.addEventListener("click", () => {
    const descricao = inputDescricao.value.trim();

    if (descricao) {
        tarefas.push({ descricao, status: false });
        salvarTarefas();
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
