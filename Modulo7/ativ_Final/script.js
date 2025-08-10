        document.getElementById("buscar").addEventListener("click", () => {
            const nomeUsuario = document.getElementById("usuario").value.trim();
            const lista = document.getElementById("dados");
            lista.innerHTML = ""; // limpa lista

            if (!nomeUsuario) {
                alert("Digite um nome de usuário");
                return;
            }

            fetch(`https://api.github.com/users/${nomeUsuario}`)
                .then(res => res.json())
                .then(data => {
                    if (data.message === "Not Found") {
                        lista.innerHTML = "<li>Usuário não encontrado</li>";
                        return;
                    }

                    const itens = [
                        `Login: ${data.login}`,
                        `Nome: ${data.name || "Não informado"}`,
                        `Bio: ${data.bio || "Sem bio"}`,
                        `Repositórios públicos: ${data.public_repos}`,
                        `Seguidores: ${data.followers}`,
                        `Seguindo: ${data.following}`
                    ];

                    itens.forEach(info => {
                        const li = document.createElement("li");
                        li.textContent = info;
                        lista.appendChild(li);
                    });
                })
                .catch(err => {
                    lista.innerHTML = "<li>Erro ao buscar dados</li>";
                    console.error(err);
                });
        });