// Exercício 1 - Cadastro de Usuário

function usuario(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}
 
const usuario1 = new usuario("bia", 17, "bia@gmail.com" )
console.log(usuario1) 

//Exercício 2 - Atualizar Idade
function usuario2(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}
    const usuario3 = new usuario2("Marcos", 19, "marquinhos@hotmail.com" )
    usuario2.idade = 25
    console.log(usuario2.idade); 


//Exercício 3 - Explorador de Objetos
function explorarObjeto(objeto, operacao) {
  switch (operacao) {
    case "chaves":
      return Object.keys(objeto);
    case "valores":
      return Object.values(objeto);
    case "entradas":
      return Object.entries(objeto);
    default:
      return "Operação inválida.";
  }
}

console.log(explorarObjeto({ nome: "Ana", idade: 28, cidade: "Recife" }, "chaves"));
console.log(explorarObjeto({ nome: "Ana", idade: 28, cidade: "Recife" }, "valores"));
console.log(explorarObjeto({ nome: "Ana", idade: 28, cidade: "Recife" }, "entradas"));
console.log(explorarObjeto({ nome: "Ana", idade: 28, cidade: "Recife" }, "teste"));
  


//Exercício 4 - Catálogo de Produtos
/*
function exibirCatalogo(produtos) {
  console.log("Catálogo de Produtos:");

  for (let i in produtos) {
    const produto = produtos[i];
    console.log(`${produto.nome} - R$${produto.preco}`);
  }
}

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Webcam", preco: 250 }
];

exibirCatalogo(produtos);

*/
//Exercício 5 - Proteção de Objetos
function protegerObjeto(obj, modo) {
  if (modo === "extensivel") {
    Object.preventExtensions(obj);
  } else if (modo === "selado") {
    Object.seal(obj);
  } else if (modo === "congelado") {
    Object.freeze(obj);
  }

 
  return {
    extensivel: Object.isExtensible(obj),
    selado: Object.isSealed(obj),
    congelado: Object.isFrozen(obj)
  };
}

const meuObjeto = { nome: "João" };
const resultado = protegerObjeto(meuObjeto, "congelado");
console.log(resultado);


//Exercício 6 - Sistema de Gerenciamento de Produtos
function gerenciarProdutos(produtos, comando, nomeProduto, novaQuantidade) {
  switch (comando) {
    case "listarDisponiveis":
      return produtos.filter(produto => produto.estoque > 0);

    case "buscarProduto":
      if (!nomeProduto) {
        console.warn("Nome do produto não fornecido.");
        return null;
      }
      const encontrado = produtos.find(produto => produto.nome === nomeProduto);
      return encontrado || null;

    case "calcularValorTotal":
      return produtos.reduce((total, produto) => total + (produto.preco * produto.estoque), 0);

    case "atualizarEstoque":
      if (!nomeProduto || typeof novaQuantidade !== 'number') {
        console.warn("Nome do produto ou nova quantidade inválidos.");
        return;
      }
      const produtoAtualizar = produtos.find(produto => produto.nome === nomeProduto);
      if (produtoAtualizar) {
        produtoAtualizar.estoque = novaQuantidade;
      } else {
        console.warn("Produto não encontrado.");
      }
      return;

    default:
      console.warn("Comando inválido.");
      return null;
  }
}


const produtos = [
  { nome: "Celular", preco: 2000, estoque: 5 },
  { nome: "Notebook", preco: 3500, estoque: 0 },
  { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

// 1. Listar disponíveis
console.log("Produtos disponíveis:");
console.log(gerenciarProdutos(produtos, "listarDisponiveis"));

// 2. Buscar produto
console.log("Buscando produto 'Notebook':");
console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));

// 3. Calcular valor total do estoque
console.log("Valor total do estoque:");
console.log(gerenciarProdutos(produtos, "calcularValorTotal"));

// 4. Atualizar estoque do 'Notebook' para 3
gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log("Estoque do Notebook após atualização:");
console.log(produtos[1].estoque);
