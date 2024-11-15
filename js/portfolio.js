// produtos.js
function adicionarAoCarrinho(botao) {
    const produto = botao.parentNode;
    const nome = produto.dataset.nome;
    const preco = produto.dataset.preco;
  
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = { nome, preco };
  
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    alert(`Produto "${nome}" adicionado ao carrinho!`);
  }
  