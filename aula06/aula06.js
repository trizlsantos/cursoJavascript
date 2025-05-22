/* const cliente = {
    nome: "Bia",
    idade: 17,
    email: "bia@gmail.com"
};


console.log(cliente);
console.log(`Nome: ${cliente.nome}`)
console.log(`Idade: ${cliente.idade}`)
console.log(`Email: ${cliente.email}`) */

// literal
/*
const aluno = {
    nome: "Gabi",
    note: 7,5
}

console.log(aluno); */

//new

/* const carro = new Object ();

carro.marca = "Fiat";
carro.ano = 2024;
carro.preco = 50000;

console.log(carro) */

// construtor
/*  function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

const produto1 = new Produto("Celular", 1500)
console.log(produto1)

const produto2 = new Produto("Notebook", 3500);
console.log(produto2) 

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
} 


const produto = {
    nome: "Celular",
    preco: 2000,

    categorias: ["Eletrônico", "Tecnologia"],

    fabricante: {
     nome: "Microsoft",
    país: "EUA"
    },

    aplicarDesconto: function(percentual){
        return this.preco = (this.preco) * (percentual / 100);
    }
};

console.log(produto);
console.log(produto.categorias[1]);
console.log(produto.fabricante.país);
console.log(produto.aplicarDesconto(50)); 

const produtos = [];

function Produto(nome, preco, emEstoque){
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
}

const p1 = new Produto("Celular", 2000, true);
produtos.push(p1);

produtos.push(new Produto("Shampoo", 10, false))
produtos.push(new Produto("Condicionador", 12, true))

const emEstoque = produtos.filter(produto => produto.emEstoque)

console.log(emEstoque); 

const produto = {
    nome: "Celular",
    preco: 2000,
    estoque: 30
}

//keys ()
const chaves = Object.keys(produto);
console.log(chaves);

//values ()
const valores = Object.values(produto);
console.log(valores);

//entries ()
const chaveValor = Object.entries(produto);
console.log(chaveValor);

for (let chave in produto) {
    console.log(`${chave}: ${produto[chave]}`)
}


const produto = {
    nome: "Celular",
    preco: 2000,
    estoque: 30
}

Object.defineProperty(produto, "desconto", {
    value: 10,
    writable: false,
    enumerable: true
})

console.log(produto); */

const usuario = {
    id: 7,
    nome: "João",
    idade: 29,
    saldo: 1450.00,
    tipoConta: ["corrente", "poupança"],

    exibirSaldo: function () {
        console.log(`Saldo disponível: ${this.saldo}`)
    }
}

// preventExtensions()
Object.preventExtensions(usuario);
usuario.limiteCredito = 1000;
usuario.fatura = 2000;
delete usuario.idade;

/* Object.seal(usuario);
usuario.ativo = true;
delete usuario.limiteCartao;
usuario.idade = 20;
*/

Object.freeze(usuario);
usuario.ativo = true;
delete usuario.limiteCartao;
usuario.idade = 20;


console.log(usuario)
