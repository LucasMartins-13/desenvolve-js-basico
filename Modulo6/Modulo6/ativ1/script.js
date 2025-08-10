        document.querySelector("h1").textContent = "Aprendendo JavaScript";

        document.querySelectorAll("ul li").forEach(item => {
            item.style.color = "blue";
            item.style.fontSize = "20px";
            item.style.fontWeight = "bold";
        });

        document.querySelectorAll("p").forEach(paragrafo => {
            paragrafo.classList.add("destaque");
        });
        document.querySelector("button").textContent = "Clique Aqui";