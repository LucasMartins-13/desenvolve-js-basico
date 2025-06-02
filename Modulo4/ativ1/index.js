let estoque = [];

function adicionarLivro(titulo, autor, quantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log("Livro já existe.");
      return;
    }
  }
  estoque.push({ titulo, autor, quantidade });
  console.log("Livro adicionado.");
}

function removerLivro(titulo) {
  estoque = estoque.filter(livro => livro.titulo !== titulo);
  console.log("Livro removido.");
}

function atualizarQuantidade(titulo, quantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = quantidade;
      console.log("Quantidade atualizada.");
      return;
    }
  }
  console.log("Livro não encontrado.");
}

function listarLivros() {
  if (estoque.length === 0) {
    console.log("Estoque vazio.");
  } else {
    for (let livro of estoque) {
      console.log(`${livro.titulo} - ${livro.autor} (${livro.quantidade})`);
    }
  }
}



adicionarLivro("Dom Casmurro", "Machado de Assis", 2);
adicionarLivro("1984", "George Orwell", 5);
listarLivros();
atualizarQuantidade("1984", 10);
removerLivro("Dom Casmurro");
listarLivros();
