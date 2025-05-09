//let nome = prompt("Qual é o seu nome?");
//let idade = prompt("Qual é a sua idade?");
//let altura = prompt("Qual a sua altura?");
let genero = prompt("Qual é o seu gênero?");
let estudante = prompt("Você é estudante?");

console.log(`bem vindo, ${nome} !`)
console.log(`seu perfil: `)
console.log("nome: ", nome);
console.log("idade: ", idade);
console.log("altura: ", altura);
console.log("genero: ", genero);
console.log("estudante: ", estudante);


// Exercicio 02 desconto 

//operador ternario
// condicao ? expressao1 : expressao2;

let valorCompra = parseFloat(prompt("Informe o valor da compra:")); 
let desconto = valorCompra > 100 ? valorCompra * 0.1 : valorCompra * 0.05;
let valorFinal = valorCompra - desconto;

console.log(`Valor original: R$ ${valorCompra}`);
console.log(`Desconto aplicado: R$ ${desconto}`);
console.log(`Valor final: R$ ${valorFinal}`);


// Exercicio 03

let idade = prompt("Qual é a sua idade?");
// let mensagem = idade >= 18 ? "Entrada permitida" : "Entrada negada";
console.log(mensagem);

// Exercicio 04

let estoqueAtual = parseInt(prompt("Informe a quantidade atual no estoque:"));
let quantidadeRemover = parseInt(prompt("Informe a quantidade que deseja remover:"));

let mensagem = (quantidadeRemover >= 0 && quantidadeRemover <= estoqueAtual) 
    ? `Estoque atualizado: ${estoqueAtual - quantidadeRemover}` 
    : "Operação inválida: quantidade insuficiente no estoque";

console.log(mensagem);

// Exercicio 04 

let confirmaExclusao = confirm("Você deseja excluir sua conta?");

confirmaExclusao ? alert("Conta excluída com sucesso.") : alert("Ação cancelada pelo usuário.");

// Exercicio 05

let nome = prompt("Informe seu nome:");
let peso = parseFloat(prompt("Informe seu peso (kg):"));
let altura = parseFloat(prompt("Informe sua altura (m):"));
let imc = peso / (altura * altura);

let confirmaDados = confirm(`Seus Dados:Nome: ${nome}Peso: ${peso} kg, Altura: ${altura} Deseja continuar?`);

confirmaDados ? alert(`${nome}, seu IMC é ${imc.toFixed(2)}`) : alert("Você saiu do programa.");









