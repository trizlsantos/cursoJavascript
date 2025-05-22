// Descrição: Crie uma função chamada gerenciarTarefas que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:

// "adicionarInicio": adiciona uma nova tarefa no início da lista.
// "adicionarFim": adiciona uma nova tarefa no final da lista.
// "removerInicio": remove a primeira tarefa da lista.
// "removerFim": remove a última tarefa da lista.
// A função deve receber dois parâmetros: o array de tarefas e a ação a ser realizada. Se a ação for "adicionarInicio" ou "adicionarFim", a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada.

// Exemplo de uso:

// const tarefas = ["Estudar", "Treinar", "Ler"];  

// gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  

// console.log(tarefas);

// // Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]

function gerenciarTarefas(tarefas, acao, tarefa) {

    if (acao === "adicionarInicio") {
        tarefas.unshift(tarefa);
    } else if (acao === "adicionarFim") {
        tarefas.push(tarefa);
    } else if (acao === "removerInicio") {
        tarefas.shift();
    } else if (acao === "removerFim") {
        tarefas.pop();
    }
}
const tarefas = ["Estudar", "Treinar", "Ler"];
gerenciarTarefas(tarefas, "adicionarFim", "Dormir");
console.log(tarefas);

// Descrição: Crie uma função chamada calcularMedia que recebe um array de notas de um aluno e retorna a média das três melhores notas. Ordene o array de forma decrescente usando sort(), pegue as três primeiras notas usando slice(), calcule e retorne a média dessas notas.

// Exemplo de uso:

// const notas = [5, 8, 9, 3, 10, 7]; 

// let mediaTresMelhores = calcularMedia(notas);  

// console.log(mediaTresMelhores);

// Resultado esperado: média das três maiores notas (10, 9 e 8) => 9.0

function calcularMedia(notas) {
    notas.sort((a, b) => b - a);

    const melhoresNotas = notas.slice(0, 3);
    console.log("Melhores notas : ", melhoresNotas);
    const soma = melhoresNotas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / melhoresNotas.length;
    return media;
}
const notas = [5, 8, 9, 3, 10, 7];
let mediaTresMelhores = calcularMedia(notas);

console.log("Média das melhores notas", mediaTresMelhores);


// Descrição: Crie uma função chamada somarNumeros que recebe um array e retorna a soma dos números que são divisíveis por 2 e 3. Use for...in para percorrer o array.

// Exemplo de uso:

// const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

// let soma = somarNumeros(numeros);

// console.log(soma);

// Resultado esperado: 42 (6 + 24 + 12)

function somarNumeros(num) {
    let soma = 0;
    for (let i in num) {
        if (num[i] % 2 === 0 && num[i] % 3 === 0) {
            soma += num[i];
        }
    }
    return soma;
}
const num = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let soma = somarNumeros(num);
console.log(soma);

// Descrição: Crie uma duas funções chamadas obterMaior e obterMenor que recebem um array de números e retornam o maior e o menor elemento, respectivamente. Use for...of para percorrer o array e informe o maior e o menor numero encontrado.

// Exemplo de uso:

// const numeros = [-1, 3, 8, -2, 4, 10];

// let maior = obterMaior(numeros);

// let menor = obterMenor(numeros);

// console.log(maior, menor);

// Resultado esperado: 10 -2
const numeros = [-1, 3, 8, -2, 4, 10];

function obterMaior(numeros) {
    let maior = numeros[0];
    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
}
function obterMenor(numeros) {
    let menor = numeros[0];
    for (let numero of numeros) {
        if (numero < menor) {
            menor = numero;
        }
    }
    return menor;
}

let maior = obterMaior(numeros);
let menor = obterMenor(numeros);

console.log(maior, menor)

// Descrição: Crie uma função chamada exibirNomes que receba um array com nomes e use forEach para exibir no console cada nome com a frase: "Bem-vindo, [nome]!"

// Exemplo de uso:

// const nomes = ['Lucas', 'Marina', 'João'];

// exibirNomes(nomes);

// Resultado esperado:
// Bem-vindo, Lucas!
// Bem-vindo, Marina!
// Bem-vindo, João!

function exibirNomes(nomes) {
    nomes.forEach(nome => {
        console.log(`Bem-vindo, ${nome}!`);
    });
}
const nomes = ['Lucas', 'Marina', 'João'];
exibirNomes(nomes);

// Descrição: Crie uma função chamada converterMoeda que recebe um array de preços em dólares e retorna um novo array com os valores convertidos para reais (cotação: 1 dólar = 5 reais). Use map para multiplicar cada valor por 5 e retorne o novo array com os preços convertidos.

// 📌 Exemplo de uso:
// const precosDolares = [10, 20, 30]; 

// precoReais = converterMoeda(precosDolares); 

// console.log(precoReais);

// Resultado esperado: [50, 100, 150]

function converterMoeda(precosDolares) {
    const cotacao = 5;
    const precosReais = precosDolares.map(preco => preco * cotacao);
    return precosReais;
}
const precosDolares = [10, 20, 30];
const precoReais = converterMoeda(precosDolares);
console.log(precoReais);

// Descrição: Crie uma função chamada calcularTotalVendas que recebe um array de valores e retorna o total da soma de todos os valores.

// 📌 Exemplo de uso:
// const vendas = [150, 200, 100, 50];  

// let totalVendas = calcularTotalVendas(vendas);  

// console.log(totalVendas);

// Resultado esperado: 500

function calcularTotalVendas(vendas) {
    const totalVendas = vendas.reduce((acc, valor) => acc + valor, 0);
    return totalVendas;
}
const vendas = [150, 200, 100, 50];
let totalVendas = calcularTotalVendas(vendas);
console.log(totalVendas);





